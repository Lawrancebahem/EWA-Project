import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../services/admin-service/admin.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public userOverViewClicked:boolean;
  public activityOverview:boolean;
  public title:string;
  constructor(public adminService:AdminService) { }

  ngOnInit(): void {
  }

  public onUserOverview(){
    this.title = "Lijst van alle gebruikers:"
    this.userOverViewClicked = true;
    this.activityOverview = false;
    this.adminService.getAllUsers();
  }

  public onActivityOverview(){
    this.title = "Lijst van alle activiteiten:"
    this.userOverViewClicked = false;
    this.activityOverview = true;
    this.adminService.getAllActivities();
    console.log(this.adminService.activityArray);
  }

  /**
   * To delete an activity
   * @param idActivity
   */
  deleteActivity(idActivity: any) {

  }

  blockUser(id: number) {

  }

  deleteUser(id: number) {

  }
}
