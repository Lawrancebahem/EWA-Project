import { Component, OnInit } from '@angular/core';
import * as activities from "../../json/activities.json";
import {ActivityService} from "../../services/activityService/activity.service";
import {UserService} from "../../services/userService/user.service";
import {Activity} from "../../models/activity";

@Component({
  selector: 'app-matching-page',
  templateUrl: './matching-page.component.html',
  styleUrls: ['./matching-page.component.css']
})
export class MatchingPageComponent implements OnInit {

  constructor(public userService:UserService) {
  }

  ngOnInit(): void {
    this.userService.getMatchingActivities();

  }

}
