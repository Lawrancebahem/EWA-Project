import {Component, OnInit} from '@angular/core';
import * as activities from "../../../json/activities.json";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Category} from "../../../models/category";
import {CategoryService} from "../../../services/categoryService/category.service";
import {AdminService} from "../../../services/admin-service/admin.service";
import {response} from "express";

@Component({
    selector: 'app-categorypage',
    templateUrl: './categorypage.component.html',
    styleUrls: ['./categorypage.component.css']
})
export class CategorypageComponent implements OnInit {

    activityArray: any[] = [];
    categoryId;
    categoryObject;
    searchText: any;

    constructor(private activatedRoute: ActivatedRoute,
                private categoryService: CategoryService,
                public adminservice: AdminService
    ) {
    }


    private childParamsSubscription: Subscription = null;

    ngOnInit(): void {
        this.adminservice.getAllCategories()
        Object.assign(new Category(), event);

        this.childParamsSubscription =
            this.activatedRoute.params.subscribe((params: Params) => {
                    this.setcategoryId(params['id'] || -1);
                    this.getAllActivitiesForThisCategory(this.categoryId)
                    this.categoryObject = Category.trueCopy(this.categoryService.findByTitle(this.categoryId))
                }
            );
    }

    setcategoryId(param: any) {
        this.categoryId = param;
    }

    getAllActivitiesForThisCategory(id) {
        this.categoryService.getAllActivitiesForCategory(id).subscribe((response) => {
            this.activityArray = response.map((activity) => {
                return {
                    id: activity[0],
                    description: activity[1],
                    image: activity[2],
                    location: activity[3],
                    show: activity[4],
                    title: activity[5]
                }
            })
        }, error => {
            console.log(error)
        })
    }

    getCategoryTitle() {
        return this.adminservice.categoryArray.find((category) => category.idCategory == this.categoryId).name;
    }

    getCategoryImage() {
        return this.adminservice.categoryArray.find((category) => category.idCategory == this.categoryId).image;
    }

}
