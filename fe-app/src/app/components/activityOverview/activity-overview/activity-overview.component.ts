import {Component, OnInit} from '@angular/core';
// @ts-ignore
import *  as  activities from '../../../json/activities.json';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
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
    public activityArray: any[] = [];
    categoryArray: Category[] = [];
    activitySearchText;
    categorySearch = [];
    selectedActivity;
    filteredActivityArray: any[] = [];
    activitiesWithCategories: any[] = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private activityService: ActivityService,
        private categoryService: CategoryService
    ) {
    }

    ngOnInit(): void {
        this.getAllActivitiesWithCategories()
        this.getAllCategories();
        this.categoryArray.sort((a, b) => a > b ? 1 : -1);
        this.route.queryParams.subscribe(params => {
            this.selectedActivity = params['selectedActivity'];
        });

    }

    public getAllActivitiesWithCategories() {
        this.activityService.getActivitiesForCategory().subscribe((response) => {
            this.activitiesWithCategories = response.map((activityCategory) => {

                let newActivity = {
                    id: activityCategory[0],
                    description: activityCategory[1],
                    image: activityCategory[2],
                    location: activityCategory[3],
                    show: activityCategory[4],
                    title: activityCategory[5],
                    idcategory: activityCategory[6]
                }

                let foundActivity = this.activityArray.find((found) => found.id == newActivity.id)

                if(foundActivity == null){
                    this.activityArray.push(newActivity)
                }

                this.filteredActivityArray = this.activityArray

               return newActivity
            })
        }, error => {
            console.log(error)
        });
    }


    getAllCategories(): any {
        this.categoryService.getAllCategories().subscribe((categories) => {
            this.categoryArray = categories ? categories.map((category) => Category.trueCopy(category)) : [];
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
            return;
        }

        // Check every activity if it includes the selected categories.
        this.filteredActivityArray = [];
        for (let category of this.categorySearch) {
            for(let activity of this.activitiesWithCategories){
                if(activity.idcategory == category.idCategory){

                    let foundActivity = this.filteredActivityArray.find((found) => found.id == activity.id)

                    if(foundActivity == null){
                        this.filteredActivityArray.push(activity)
                    }
                }
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
