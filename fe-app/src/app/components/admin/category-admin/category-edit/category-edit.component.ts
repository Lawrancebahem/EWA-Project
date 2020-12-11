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
  private selectedCategory:number = 0;
  constructor(public adminService: AdminService,
              private convertImage: ImageBase64Service) { }

  ngOnInit(): void {
    this.adminService.getAllCategories();
  }


  /**
   * To add new category to the database
   * @param categoryTitle the title of the category
   * @param description the description of the category
   */

  public addNewCategory() {

    const closeModal = document.getElementById("close-modalCategory");
    const categoryPicture= this.uploadedCategoryImage.nativeElement.files[0];
    const imagePreview = document.getElementById("image--category-preview").querySelector("#imageCategory")
    this.convertImage.convertToBase64(categoryPicture, data => {
      imagePreview.setAttribute("src", data);
      const category: Category = new Category();
      category.name = this.titleInputCategory.nativeElement.value;
      category.description = this.descriptionCategory.nativeElement.value;
      category.image = categoryPicture != undefined ? data : "";

      //To make sure that the category is not being read as null
      let objectCategory = {id:this.selectedCategory ,name: category.name, description:category.description, image: category.image};
      // Add the category to the list
      this.adminService.addNewCategory(objectCategory).subscribe((response) => {


      },error => {
        console.log(error);
      })
    })
    // Close the modal after 1.5sec
    setTimeout( ()=> {
      closeModal.click();
      this.clearFieldsModal();

    }, 2000)
  }


  public editCategory(idCategory){
    this.selectedCategory = idCategory;
    let category = this.adminService.categoryArray.find(category => category.idCategory == idCategory);
    this.titleInputCategory.nativeElement.value = category.name;
    this.descriptionCategory.nativeElement.value =  category.description;
    // this.uploadedCategoryImage.nativeElement.value = category.image;
    const openModal = document.getElementById("openModal-category"); // trigger the modal
    
    setTimeout(()=>{
      openModal.click();
    },)

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

  deleteCategory(idCategory: number) {

  }
}
