 import { Injectable } from '@angular/core';
 // @ts-ignore
 import *  as  activities from '../../json/activities.json';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  activityArray: any = (activities as any).default;

  constructor() { }

  findAll(){
    return this.activityArray
  }

  findById(activityId){
    return this.activityArray.filter(x => x.id == activityId)[0];
  }
}
