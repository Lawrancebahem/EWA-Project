 import { Injectable } from '@angular/core';
 // @ts-ignore
 import *  as  activities from '../../json/activities.json';
 import {HttpClient} from "@angular/common/http";
 import {User} from "../../models/user";
 import {Observable} from "rxjs";
 import {environment} from "../../../environments/environment";
 import {shareReplay} from "rxjs/operators";
 import {Activity} from "../../models/activity";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  activityArray: any = (activities as any).default;

  constructor(private httpClient:HttpClient) { }

  findAll(){
    return this.activityArray
  }

  findById(activityId){
    return this.activityArray.filter(x => x.id == activityId)[0];
  }

  public getAllActivities():Observable<Activity[]>{
    return this.httpClient.get<Activity[]>(`${environment.apiUrl}/activity/all`).pipe(shareReplay(1));
  }
}
