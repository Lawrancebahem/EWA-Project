import {Component, OnInit} from '@angular/core';
// @ts-ignore
import *  as  activities from '../../../json/activities.json';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {ActivityService} from "../../../services/activityService/activity.service";
import {Activity} from "../../../models/activity";
import {Category} from "../../../models/category";
import {AdminService} from "../../../services/admin-service/admin.service";

@Component({
    selector: 'app-activity-overview',
    templateUrl: './activity-overview.component.html',
    styleUrls: ['./activity-overview.component.css']
})
export class ActivityOverviewComponent implements OnInit {
    public activityArray:Activity[] = [];
    categoryArray: Category[] = [];
    activitySearchText;
    categorySearch = [];
    selectedActivity;
    filteredActivityArray :Activity[] = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private adminService:AdminService
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
            this.filteredActivityArray = this.adminService.activityArray;

    }

    getAllCategories(): any {
            this.categoryArray = this.adminService.categoryArray;
    }

    // addCategoryToSearch() {
    //     this.categorySearch = [];
    //
    //     // Loop door alle category knoppen.
    //     for (let i = 0; i < this.categoryArray.length; i++) {
    //         let currentButton = document.getElementById(this.categoryArray[i].id)
    //
    //         // Check of de huidige knop is ingedrukt.
    //         if (currentButton.getAttribute("aria-pressed") === "true") {
    //             // Als de knop is ingedrukt wordt hij in een array gezet.
    //             this.categorySearch.push(this.categoryArray[i])
    //         }
    //     }
    //
    //     for (let i = 0; i < this.activityArray.length; i++) {
    //         for (let j = 0; j < this.categorySearch.length; j++) {
    //             let currentCategory = this.categorySearch[j]
    //             if (this.activityArray[i].categories.find(x => x === currentCategory) == false) {
    //                 this.activityArray.splice(this.activityArray[i]);
    //             }
    //         }
    //     }
    // }

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

    goToActivityDetails(){

    }
}
