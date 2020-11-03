import {Component, OnInit} from '@angular/core';
// @ts-ignore
import *  as  activities from '../../../json/activities.json';


@Component({
    selector: 'app-activity-overview',
    templateUrl: './activity-overview.component.html',
    styleUrls: ['./activity-overview.component.css']
})
export class ActivityOverviewComponent implements OnInit {
    activityArray: any = (activities as any).default;
    categoryArray: Array<string> = [];
    activitySearchText;
    categorysearch = [];

    constructor() {
    }

    ngOnInit(): void {
        this.getAllCategories()
        this.findByfilter();
    }

    getAllCategories(): any {
        for (let activity of this.activityArray) {
            for (let i = 0; i < activity.categories.length; i++) {
                if (!this.categoryArray.includes(activity.categories[i])) {
                    this.categoryArray.push(activity.categories[i])
                }
            }
        }
    }

    addCategoryToSearch(){
        this.categorysearch = [];
        for (let i = 0; i < this.categoryArray.length; i++) {
            let currentButton = document.getElementById(this.categoryArray[i])
            if(currentButton.getAttribute("aria-pressed") === "true"){
                this.categorysearch.push(this.categoryArray[i])
            }
        }
        console.log(this.categorysearch)
    }


    findByfilter(){
        for (let i = 0; i <this.activityArray; i++) {
            if (this.activityArray.categories[i] === this.categorysearch[i]){

            }
            console.log(this.activityArray);
        }
    }
}

