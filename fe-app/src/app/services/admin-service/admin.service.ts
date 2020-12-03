import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivityService} from "../activityService/activity.service";
import {response} from "express";
import {Activity} from "../../models/activity";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public activityArray:Activity[] = [];
  constructor(private httpClient:HttpClient,
              private activityService:ActivityService) {


  }

  /**
   * To get all activities
   */
  public getAllActivities(){
    this.activityService.getAllActivities().subscribe((activities)=>{
      this.activityArray = activities ? activities.map((activity) => Activity.trueCopy(activity)):[];

    })
  }
}
