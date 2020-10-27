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

    constructor() {
    }

    ngOnInit(): void {
        this.getAllCategories()
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
}

