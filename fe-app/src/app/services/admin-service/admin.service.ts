import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivityService} from "../activityService/activity.service";
import {response} from "express";
import {Activity} from "../../models/activity";
import {UserService} from "../userService/user.service";
import {User} from "../../models/user";
import {Category} from "../../models/category";
import {CategoryService} from "../categoryService/category.service";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public activityArray:Activity[] = [];
  public userArray:User[] = [];
  public categoryArray:Category[] = [];

  constructor(private httpClient:HttpClient,
              private activityService:ActivityService,
              private userService:UserService,
              private categoryService: CategoryService) {
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
      console.log(users);
      this.userArray = users ? users.map((user) => User.makeTrueCopy(user)):[];
    })
  }

  public getAllCategories() {
    this.categoryService.findAll().subscribe((categories)=>{
      this.categoryArray = categories ? categories.map((category) => Category.trueCopy(category)):[];
    })
  }

}
