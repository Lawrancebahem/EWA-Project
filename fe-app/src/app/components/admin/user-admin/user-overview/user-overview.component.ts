import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../../services/admin-service/admin.service";
import {ImageBase64Service} from "../../../../services/convertImageService/image-base64.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {shareReplay} from "rxjs/operators";

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.css']
})
export class UserOverviewComponent implements OnInit {

  public title: string;

  constructor(public adminService: AdminService,
              private convertImage: ImageBase64Service,
              private httpClient: HttpClient) { }

  ngOnInit(): void {

    this.adminService.getAllUsers();
  }



  /**
   * To block a user based on the give email
   * @param email
   */
  blockUser(email: string) {
    let response = this.httpClient.get(`${environment.apiUrl}/user/block/` + email + "/").pipe(shareReplay(1));
    response.subscribe((response) => {
      console.log(response);
    }, error => {
      console.log(error);
    })
    this.adminService.userArray.find(user => user.email == email).blocked = true;
  }


  /**
   * To unblock user based on the email
   * @param email
   */
  unBlockUser(email: string) {
    let response = this.httpClient.get(`${environment.apiUrl}/user/unblock/` + email + "/").pipe(shareReplay(1));
    response.subscribe((response) => {
      console.log(response);
    }, error => {
      console.log(error);
    })
    this.adminService.userArray.find(user => user.email == email).blocked = false;
  }

  /**
   * This method is to delete a user
   * @param id
   */
  deleteUser(id: string) {

  }

  /**
   * This method is to make the user as an admin
   * @param email
   */
  makeAnAdmin(email: string) {
    let response = this.httpClient.get(`${environment.apiUrl}/user/make-admin/` + email + "/").pipe(shareReplay(1));

    response.subscribe((response)=>{
      console.log(response);
    },error => {
      console.log(error);
    })
  }
}
