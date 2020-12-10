import {Component, OnInit} from '@angular/core';
// @ts-ignore
import *  as  activities from '../../../json/activities.json';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ActivityService} from "../../../services/activityService/activity.service";
import {Activity} from "../../../models/activity";
import {Category} from "../../../models/category";
import {CategoryService} from "../../../services/categoryService/category.service";

@Component({
    selector: 'app-activity-overview',
    templateUrl: './activity-overview.component.html',
    styleUrls: ['./activity-overview.component.css']
})
export class ActivityOverviewComponent implements OnInit {
    public activityArray:Activity[] = [];
    categoryArray: Category[] = [];
    allCategoriesArray: Category[] = [];
    activitySearchText;
    categorySearch = [];
    selectedActivity;
    filteredActivityArray :Activity[] = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private activityService: ActivityService,
        private categoryService: CategoryService
    ) {}

    ngOnInit(): void {
        this.getAllCategories();
        this.getAllActivities();
        this.categoryArray.sort((a, b) => a > b ? 1 : -1);
        this.route.queryParams.subscribe(params => {
            this.selectedActivity = params['selectedActivity'];
        });
        this.filterSearch();
    }

    public getAllActivities(){
        this.activityService.getAllActivities().subscribe((activities)=>{
            this.activityArray = activities ? activities.map((activity) => Activity.trueCopy(activity)):[];
            this.filteredActivityArray = this.activityArray;
        })
    }

    getAllCategories(): any {
        this.categoryService.getAllCategories().subscribe((categories)=>{
            this.categoryArray = categories ? categories.map((category) => Category.trueCopy(category)):[];
        })
    }

    filterSearch() {
        // clear both arrays because a new search is done.
        this.categorySearch = [];
        this.filteredActivityArray = [];

        // Check every filter if checked.
        for (let category of this.categoryArray) {
            let currentCategory = <HTMLInputElement>document.getElementById(String(category.idCategory));
            if (currentCategory.checked) {
                this.categorySearch.push(category);
            }
        }

        // If no filter is selected show every activity.
        if (this.categorySearch.length == 0) {
            this.filteredActivityArray = this.activityArray;
        }

        // Check every activity if it includes the selected categories.
        for (let activity of this.activityArray) {
            for (let currentCategory of this.categorySearch) {
                // If the activity includes more than one category only show it once.
                //TODO: fix with the database table ACTIVITY_CATEGORY
                // if (activity.categories.includes(currentCategory)) {
                //     if (!this.filteredActivityArray.includes(activity)) {
                //         this.filteredActivityArray.push(activity);
                //     }
                // }
            }
        }
    }

    clearFilters() {
        for (let filter of this.categoryArray) {
            let currentfilter = <HTMLInputElement>document.getElementById(String(filter.idCategory));
            currentfilter.checked = false;
        }
        this.filterSearch();
    }
}
