import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../../services/admin-service/admin.service";
import {ImageBase64Service} from "../../services/convertImageService/image-base64.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {shareReplay} from "rxjs/operators";
import {User} from "../../models/user";
// @ts-ignore
import interests from "../../json/interests.json";

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    @ViewChild('uploadedPicture') uploadedProfile: ElementRef;
    public userOverViewClicked: boolean;
    public activityOverview: boolean;
    public title: string;

    public arrayInterests: { id, name, image }[] = interests;

    constructor(public adminService: AdminService,
                private convertImage: ImageBase64Service,
                private httpClient: HttpClient) {
    }

    ngOnInit(): void {

        setTimeout(() => {
            console.log(this.adminService.userArray)

        }, 2000)
    }

    public onUserOverview() {
        this.title = "Lijst van alle gebruikers:"
        this.userOverViewClicked = true;
        this.activityOverview = false;
        this.adminService.getAllUsers();
    }

    public onActivityOverview() {
        this.title = "Lijst van alle activiteiten:"
        this.userOverViewClicked = false;
        this.activityOverview = true;
        this.adminService.getAllActivities();
    }

    /**
     * To delete an activity
     * @param idActivity
     */
    deleteActivity(idActivity: any) {

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

    deleteUser(id: string) {

    }

    /**
     * Once the admin clicks on adding new activity, it will take
     */
    addNewActivity() {
        //get the selected interests
        const selectedInterests: number[] = Array.from(document.getElementById('interests-section')
            .querySelectorAll('input[name=interest]:checked')).map(interest => {
            return Number(interest.getAttribute('value'));
        });

        console.log(selectedInterests);

        const closeModal = document.getElementById("close-modal");
        const activityPicture = this.uploadedProfile.nativeElement.files[0];
        const imagePreview = document.getElementById("image--activity-preview").querySelector("#image-preview")
        this.convertImage.convertToBase64(activityPicture, data => {
            imagePreview.setAttribute("src", data);
            console.log(data);
        })
        //Close the modal after 1.5sec
        setTimeout(function () {
            closeModal.click();
        }, 1500)
    }

}

