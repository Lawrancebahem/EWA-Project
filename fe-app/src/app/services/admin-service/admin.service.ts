import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivityService} from "../activityService/activity.service";
import {response} from "express";
import {Activity} from "../../models/activity";
import {UserService} from "../userService/user.service";
import {User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public activityArray:Activity[] = [];
  public userArray:User[] = [];
  constructor(private httpClient:HttpClient,
              private activityService:ActivityService,
              private userService:UserService) {


  }

  /**
   * To get all activities
   */
  public getAllActivities(){
    this.activityService.getAllActivities().subscribe((activities)=>{
      this.activityArray = activities ? activities.map((activity) => Activity.trueCopy(activity)):[];

    })
  }

  public getAllUsers(){
    this.userService.findAll().subscribe((users)=>{
      this.userArray  = users ? users.map((user) => User.makeTrueCopy(user)):[];
    })
  }
}
