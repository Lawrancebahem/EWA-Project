import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {User} from "../../models/user";
import {environment} from "../../../environments/environment";
import {shareReplay} from "rxjs/operators";
// @ts-ignore
import {Interest} from "../../models/Interest";
import {Activity} from "../../models/activity";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users:User[];

  public matchingActivityArray =  [];

  constructor(private httpClient:HttpClient) {
    this.users = [];
  }


  /**
   * To save or update a user
   * @param user
   */
  public registerUser(user:User):Observable<any>{
    return this.httpClient.post<User>(`${environment.apiUrl}/authenticate/register`, user,{observe: "response"}).pipe(shareReplay(1));
  }


  public update(user:User){
    return this.httpClient.put<User>(`${environment.apiUrl}/user/update`, user).pipe(shareReplay(1));

  }

  /**
   * To insert user's ineterests
   * @param interests
   */
  public insertUserInterests(interests: number[]):Observable<any>{
    return this.httpClient.post<User>(`${environment.apiUrl}/user/interests`, interests).pipe(shareReplay(1));
  }

  /**
   * To get all users(just for admin)
   */
  public findAll():Observable<User[]>{
    return this.httpClient.get<User[]>(`${environment.apiUrl}/user/all`).pipe(shareReplay(1));
  }

  /**
   * To get the user's interests
   * @param userId
   */
  public getUserInterests():Observable<number[]>{
    return this.httpClient.get<number[]>(`${environment.apiUrl}/user/my-interests`).pipe(shareReplay(1));

  }

  /**
   * To find a user by an id
   * @param id
   */
  public findById(id){
    return this.httpClient.get<User>(`${environment.apiUrl}/user/`+id).pipe((shareReplay(1)));
  }

  /**
   * To delete a user by an id
   * @param id
   */
  public deleteById(id){
    return this.httpClient.delete(`${environment.apiUrl}/user/`+id).pipe(shareReplay(1));
  }

  /**
   * To get the the matches of activities
   */
  public getMatchingActivities(){
   let response = this.httpClient.get<Activity[]>(`${environment.apiUrl}/user/activity-match`).pipe((shareReplay(1)));
   response.subscribe((activities)=>{
     this.matchingActivityArray =  activities.map((activities)=>{
       return {id:activities[0], description: activities[1], image:activities[2], location: activities[3], show:activities[4], title:activities[5]}
     })
     console.log(this.matchingActivityArray);
   },error => {
     console.log(error);
   })
  }

}
