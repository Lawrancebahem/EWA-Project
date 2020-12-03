import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public userOverViewClicked:boolean;
  public activityOverview:boolean;
  public title:string;
  constructor() { }

  ngOnInit(): void {
  }

  public onUserOverview(){
    this.title = "All list of all users:"
    this.userOverViewClicked = true;
    this.activityOverview = false;
  }

  public onActivityOverview(){
    this.title = "All list of all activities:"
    this.userOverViewClicked = false;
    this.activityOverview = true;
  }
}
