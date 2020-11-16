import { Component, OnInit } from '@angular/core';
import * as activities from "../../../json/activities.json";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-categorypage',
  templateUrl: './categorypage.component.html',
  styleUrls: ['./categorypage.component.css']
})
export class CategorypageComponent implements OnInit {

  activityArray: any = (activities as any).default;
  category;
  searchtext: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  private childParamsSubscription: Subscription = null;

  ngOnInit(): void {
    this.childParamsSubscription =
        this.activatedRoute.params.subscribe((params: Params) => {
              this.setCategory(params['categoryTitle'] || -1);
            }
        );
    console.log(this.category)
  }

  setCategory(value){
  this.category = value;
  }

}
