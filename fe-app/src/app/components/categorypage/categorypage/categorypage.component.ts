import { Component, OnInit } from '@angular/core';
import * as activities from "../../../json/activities.json";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Category} from "../../../models/category";
import {CategoryService} from "../../../services/categoryService/category.service";
import {AdminService} from "../../../services/admin-service/admin.service";

@Component({
  selector: 'app-categorypage',
  templateUrl: './categorypage.component.html',
  styleUrls: ['./categorypage.component.css']
})
export class CategorypageComponent implements OnInit {

  activityArray: any = (activities as any).default;
  categoryTitle;
  categoryObject;
  searchText: any;

  constructor(private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService,
              public adminservice: AdminService
              ) {
  }


  private childParamsSubscription: Subscription = null;

  ngOnInit(): void {
    Object.assign(new Category(), event);

    this.childParamsSubscription =
        this.activatedRoute.params.subscribe((params: Params) => {
              this.setcategoryTitle(params['categoryTitle'] || -1);
              this.categoryObject = Category.trueCopy(this.categoryService.findByTitle(this.categoryTitle));
            }
        );
  }

  setcategoryTitle(param: any){
  this.categoryTitle = param;
  }



}
