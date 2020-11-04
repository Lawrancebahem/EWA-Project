import {Component, OnInit} from '@angular/core';
// @ts-ignore
import *  as  activities from '../../../json/activities.json';
import {forEachComment} from "tslint";


@Component({
    selector: 'app-activity-overview',
    templateUrl: './activity-overview.component.html',
    styleUrls: ['./activity-overview.component.css']
})
export class ActivityOverviewComponent implements OnInit {
    activityArray: any = (activities as any).default;
    categoryArray: Array<string> = [];
    activitySearchText;
    categorySearch = [];
    filteredActivityArray = this.activityArray;

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

    addCategoryToSearch() {
        this.categorySearch = [];

        // Loop door alle category knoppen.
        for (let i = 0; i < this.categoryArray.length; i++) {
            let currentButton = document.getElementById(this.categoryArray[i])

            // Check of de huidige knop is ingedrukt.
            if (currentButton.getAttribute("aria-pressed") === "true") {
                // Als de knop is ingedrukt wordt hij in een array gezet.
                this.categorySearch.push(this.categoryArray[i])
            }
        }

        for (let i = 0; i < this.activityArray.length; i++) {
            for (let j = 0; j < this.categorySearch.length; j++) {
                let currentCategory = this.categorySearch[j]
                console.log(currentCategory)
                if (this.activityArray[i].categories.find(x => x === currentCategory) == false) {
                    this.activityArray.splice(this.activityArray[i]);
                }
            }
        }
        console.log(this.categorySearch)
        console.log(this.activityArray)
    }

    filterSearch() {
        this.categorySearch = [];
        this.filteredActivityArray = [];

        for (let category of this.categoryArray) {
            let currentCategory = <HTMLInputElement>document.getElementById(category);
            if (currentCategory.checked) {
                this.categorySearch.push(category)
            }
        }

        if (this.categorySearch.length == 0) {
            this.filteredActivityArray = this.activityArray
        }

        console.log("Geselecteerde categoriën: " + this.categorySearch)

        for (let activity of this.activityArray) {
            for (let currentCategory of this.categorySearch) {
                if (activity.categories.includes(currentCategory)) {
                    if (!this.filteredActivityArray.includes(activity)){
                        this.filteredActivityArray.push(activity)
                    }
                }
            }
        }
    }


    findByfilter(){
        for (let i = 0; i <this.activityArray; i++) {
            if (this.activityArray.categories[i] === this.categorysearch[i]){

            }
            console.log(this.activityArray);
        }
    }
}

