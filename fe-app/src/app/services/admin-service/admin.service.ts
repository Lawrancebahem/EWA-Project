import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivityService} from "../activityService/activity.service";
import {response} from "express";
import {Activity} from "../../models/activity";
import {UserService} from "../userService/user.service";
import {User} from "../../models/user";
import {Category} from "../../models/category";
import {CategoryService} from "../categoryService/category.service";
import {environment} from "../../../environments/environment";
import {shareReplay} from "rxjs/operators";
import {Observable} from "rxjs";

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
      console.log(activities);
      this.activityArray = activities ? activities.map((activity) => Activity.trueCopy(activity)):[];

    })
  }

  /**
   * To get all users
   */
  public getAllUsers(){
    this.userService.findAll().subscribe((users)=>{
      console.log(users);
      this.userArray = users ? users.map((user) => User.makeTrueCopy(user)):[];
    })
  }

  /**
   * To get all categories
   */
  public getAllCategories() {
    this.categoryService.getAllCategories().subscribe((categories)=>{
      console.log(categories)
      this.categoryArray = categories ? categories.map((category) => Category.trueCopy(category)):[];
    })
  }

  /**
   * To add new activity
   * @param category
   */
  public addNewActivity(activity):Observable<Activity>{
    return this.httpClient.post<Activity>(`${environment.apiUrl}/activity/add-activity`, activity, ).pipe(shareReplay(1))
  }
  /**
   * To add interests to a specific activity
   * @param interestsId the ids of the selected interests
   */
  public addInterestsToActivity(idActivity, interestsId:number[]):Observable<number[]>{
    return this.httpClient.post<number[]>(`${environment.apiUrl}/activity/add-activity-interests/`+idActivity, interestsId).pipe(shareReplay(1))
  }

  /**
   * This method is to add categories to an activity
   * @param idActivity
   * @param categories
   */
  public addCategoriesToActivity(idActivity, categories:number[]):Observable<number[]>{
    return this.httpClient.post<number[]>(`${environment.apiUrl}/activity/add-activity-categories/`+idActivity, categories).pipe(shareReplay(1))
  }


  public deleteAnActivity(idActivity:number):Observable<boolean>{
    return this.httpClient.get<boolean>(`${environment.apiUrl}/activity/delete/`+idActivity).pipe(shareReplay(1))

  }

  /**
   * To add new category
   * @param category
   */
  public addNewCategory(category):Observable<any>{
    return this.httpClient.post(`${environment.apiUrl}/category/add-category`, category, ).pipe(shareReplay(1))
  }

  public deleteAnCategory(idCategory: number):Observable<boolean>{
    return this.httpClient.get<boolean>(`${environment.apiUrl}/category/delete/`+idCategory).pipe(shareReplay(1));
  }



}
