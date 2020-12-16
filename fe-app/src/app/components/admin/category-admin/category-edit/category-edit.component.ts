import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Category} from "../../../../models/category";
import {AdminService} from "../../../../services/admin-service/admin.service";
import {ImageBase64Service} from "../../../../services/convertImageService/image-base64.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  @ViewChild('uploadedCategoryImage') uploadedCategoryImage: ElementRef;
  @ViewChild('titleInputCategory') titleInputCategory: ElementRef;
  @ViewChild('descriptionCategory') descriptionCategory: ElementRef;
  public selectedCategory: number = 0;

  constructor(public adminService: AdminService,
              private convertImage: ImageBase64Service) {
  }

  ngOnInit(): void {
    this.adminService.getAllCategories();
  }


  /**
   * To add new category to the database
   * @param categoryTitle the title of the category
   * @param description the description of the category
   */

  public addNewCategory() {

    let successMessageCategory = document.getElementById("success-message-category"); // to show success message if its done
    let uploadIconCategory = document.getElementById("upload-category-icon");
    uploadIconCategory.classList.add("uploadIcon") // let the icon move up and down

    const closeModal = document.getElementById("close-modalCategory");
    const categoryPicture = this.uploadedCategoryImage.nativeElement.files[0];
    const imagePreview = document.getElementById("image--category-preview").querySelector("#imageCategory")
    this.convertImage.convertToBase64(categoryPicture, data => {
      const category: Category = new Category();
      category.name = this.titleInputCategory.nativeElement.value;
      category.description = this.descriptionCategory.nativeElement.value;
      let selectedCategory = this.getSelectedCategory();
      category.image = categoryPicture == undefined ? selectedCategory.image : data;
      imagePreview.setAttribute("src", category.image);

      //To make sure that the category is not being read as null
      let objectCategory = {
        id: this.selectedCategory,
        name: category.name,
        description: category.description,
        image: category.image
      };
      // Add the category to the list
      this.adminService.addNewCategory(objectCategory).subscribe((response) => {
        successMessageCategory.style.display = "block";
        // Close the modal after 1.5sec
        setTimeout(() => {
          closeModal.click();
          successMessageCategory.style.display = "none";
          uploadIconCategory.classList.remove("uploadIcon");
          this.clearFieldsModal();

        }, 2500)
        console.log(response);
        this.updateArray(response)

      }, error => {
        console.log(error);
      })
    })
  }

  updateArray(category) {
    let foundCategory = this.adminService.categoryArray.find(cat => cat.idCategory == category.idCategory);
    if (foundCategory != null) {
      let index = this.adminService.categoryArray.indexOf(foundCategory);
      this.adminService.categoryArray.splice(index, 1, category);
    } else {
      this.adminService.categoryArray.push(category);
    }
  }


  public editCategory(idCategory) {
    this.selectedCategory = idCategory;
    const imagePreview = document.getElementById("image--category-preview").querySelector("#imageCategory");

    this.selectedCategory = idCategory;
    let category = this.adminService.categoryArray.find(category => category.idCategory == idCategory);
    this.titleInputCategory.nativeElement.value = category.name;
    this.descriptionCategory.nativeElement.value = category.description;
    // this.uploadedCategoryImage.nativeElement.value = category.image;
    imagePreview.setAttribute("src", category.image);
    const openModal = document.getElementById("openModal-category"); // trigger the modal

    setTimeout(() => {
      openModal.click();
    },)
  }

    setSelectedToNull() {
    this.selectedCategory = 0; // set the selected to 0
    this.clearFieldsModal(); //clear the fields
  }


  /**
   * To clear the fields of the modal, for in case of adding new category
   * @private
   */
  private clearFieldsModal(){
    this.titleInputCategory.nativeElement.value = "";
    this.descriptionCategory.nativeElement.value =  "";
    this.uploadedCategoryImage.nativeElement.value = "";
    const imagePreview = document.getElementById("image--category-preview").querySelector("#imageCategory")
    imagePreview.setAttribute("src", "assets/Images/emptyPicture.png");

  }

  public confirmDeletion() {
    let deleteModal = document.getElementById("delete-category-icon");
    deleteModal.style.display = "block"
  }

  public hideConfirmationModal(){
    let deleteModalCategory = document.getElementById("delete-category-icon");
    deleteModalCategory.style.display = "none";
  }

  deleteFromCategoryArray(id) {
    let foundCategory = this.adminService.categoryArray.find(category => category.idCategory == id);
    let index = this.adminService.categoryArray.indexOf(foundCategory);
    this.adminService.categoryArray.splice(index, 1);
  }

  getSelectedCategory() {
    return this.adminService.categoryArray.find(category => category.idCategory == this.selectedCategory);
  }

  deleteCategory() {
    let idCategory = this.selectedCategory;

    const closeModal = document.getElementById("close-modalCategory");

    this.adminService.deleteAnCategory(idCategory).subscribe((response) => {
      console.log(response);
      setTimeout(() => {
        this.deleteFromCategoryArray(idCategory);
        this.hideConfirmationModal();
        closeModal.click();
      }, 2000)
    }, error => {
      console.log(error);
    })
  }

}
