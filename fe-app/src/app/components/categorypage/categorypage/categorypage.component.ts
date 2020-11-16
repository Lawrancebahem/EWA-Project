import { Component, OnInit } from '@angular/core';
import * as activities from "../../../json/activities.json";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Category} from "../../../models/category";
import {ActivityService} from "../../../services/activityService/activity.service";
import {CategoryService} from "../../../services/categoryService/category.service";

@Component({
  selector: 'app-categorypage',
  templateUrl: './categorypage.component.html',
  styleUrls: ['./categorypage.component.css']
})
export class CategorypageComponent implements OnInit {

  private selectedCategory;
  activityArray: any = (activities as any).default;
  category;
  activitiesOfCategory;
  searchtext: any;

  constructor(private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService
              ) {

  }

  private childParamsSubscription: Subscription = null;

  ngOnInit(): void {
    Object.assign(new Category(), event);

    this.childParamsSubscription =
        this.activatedRoute.params.subscribe((params: Params) => {
              this.setCategory(params['categoryTitle'] || -1);
              this.activitiesOfCategory = Category.trueCopy(this.categoryService.findyById(this.selectedCategory))
            }
        );
    console.log(this.category);
    console.log(this.activitiesOfCategory);
  }

  setCategory(param: any){
  this.category = param;
  }

}
