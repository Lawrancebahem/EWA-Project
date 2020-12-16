import {Injectable} from '@angular/core';
// @ts-ignore
import *  as  activities from '../../json/activities.json';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/user";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {shareReplay} from "rxjs/operators";
import {Activity} from "../../models/activity";
import {Category} from "../../models/category";

@Injectable({
    providedIn: 'root'
})
export class ActivityService {

    constructor(private httpClient: HttpClient) {
    }

    findById(activityId): Observable<Activity> {
        return this.httpClient.get<Activity>(`${environment.apiUrl}/activity/` + activityId).pipe(shareReplay(1))
    }

    /**
     * To get all activities
     */
    public getAllActivities(): Observable<Activity[]> {
        return this.httpClient.get<Activity[]>(`${environment.apiUrl}/activity/all`).pipe(shareReplay(1));
    }

    /**
     * To get the interests that belong to this activity based on its id
     * @param idActivity
     */
    public getActivityInterest(idActivity:number):Observable<number[]>{
        return this.httpClient.get<number[]>(`${environment.apiUrl}/activity/activity-interests/`+idActivity).pipe(shareReplay(1));

    }

    /**
     * To get the interests that belong to this activity based on its id
     * @param idActivity
     */
    public getActivityCategory(idActivity:number):Observable<number[]>{
        return this.httpClient.get<number[]>(`${environment.apiUrl}/activity/activity-category/`+idActivity).pipe(shareReplay(1));

    }


    public getActivitiesForCategory():Observable<any[]>{
        return this.httpClient.get<any[]>(`${environment.apiUrl}/category/all/activityForCategory`).pipe(shareReplay(1));
    }
}
