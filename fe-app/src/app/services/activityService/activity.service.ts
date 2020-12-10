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
        return this.httpClient.get<Activity>(`${environment.apiUrl}/activity/`+ activityId ).pipe(shareReplay(1))
        }

    public getAllActivities(): Observable<Activity[]> {
        return this.httpClient.get<Activity[]>(`${environment.apiUrl}/activity/all`).pipe(shareReplay(1));
    }

}
