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

  constructor(public adminService: AdminService,
              private convertImage: ImageBase64Service,
              private httpClient: HttpClient) { }

  ngOnInit(): void {
  }





  public addNewCategory(categoryTitle: string, description: string) {

    const closeModal = document.getElementById("close-modalCategory");
    const categoryPicture= this.uploadedCategoryImage.nativeElement.files[0];
    const imagePreview = document.getElementById("image--category-preview").querySelector("#imageCategory")
    this.convertImage.convertToBase64(categoryPicture, data => {
      imagePreview.setAttribute("src", data);
      console.log(data);
      const category: Category = new Category();
      category.name = categoryTitle;
      category.description = description;

      // Todo:
      // category.image = data ? != null data: "";
    })
    // Close the modal after 1.5sec
    setTimeout(function () {
      closeModal.click();
    }, 2000)
  }



  deleteCategory(idCategory: number) {

  }
}
