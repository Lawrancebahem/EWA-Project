import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ActivityService} from "../../../services/activityService/activity.service";
import {Activity} from "../../../models/activity";

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {

  private selectedActivityId;
  activityToShow

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private activityService: ActivityService) {
  }

  private childParamsSubscription: Subscription = null;


  ngOnInit(): void {
    Object.assign(new Activity(), event);

    this.childParamsSubscription =
        this.activatedRoute.params.subscribe((params: Params) => {
              console.log("detail setup id=" + params['id']);
              this.setSelectedActivityId(params['id'] || -1);
              this.activityToShow = Activity.trueCopy(this.activityService.findById(this.selectedActivityId))
            }
        );
    console.log(this.activityToShow)
  }

  setSelectedActivityId(param: any) {
    this.selectedActivityId = param;
  }
}
