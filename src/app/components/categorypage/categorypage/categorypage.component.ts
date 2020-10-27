import { Component, OnInit } from '@angular/core';
import * as activities from "../../../json/activities.json";

@Component({
  selector: 'app-categorypage',
  templateUrl: './categorypage.component.html',
  styleUrls: ['./categorypage.component.css']
})
export class CategorypageComponent implements OnInit {

  activityArray: any = (activities as any).default;
  category = "herfst";
  searchtext: any;

  constructor() { }

  ngOnInit(): void {
  }

}
