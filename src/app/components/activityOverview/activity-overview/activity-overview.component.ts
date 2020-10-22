import { Component, OnInit } from '@angular/core';
// @ts-ignore
import  *  as  activities  from '../../../json/activities.json';


@Component({
  selector: 'app-activity-overview',
  templateUrl: './activity-overview.component.html',
  styleUrls: ['./activity-overview.component.css']
})
export class ActivityOverviewComponent implements OnInit {
  activityArray:  any  = (activities  as  any).default;


  constructor() { }

  ngOnInit(): void {
    console.log(this.activityArray)
  }
}
