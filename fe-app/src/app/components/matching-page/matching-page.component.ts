import { Component, OnInit } from '@angular/core';
import * as activities from "../../json/activities.json";

@Component({
  selector: 'app-matching-page',
  templateUrl: './matching-page.component.html',
  styleUrls: ['./matching-page.component.css']
})
export class MatchingPageComponent implements OnInit {

  activityArray: any = (activities as any).default;

  constructor() { }

  ngOnInit(): void {
  }

}
