import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../../../../services/admin-service/admin.service";
import {ImageBase64Service} from "../../../../services/convertImageService/image-base64.service";
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import interests from "../../../../json/interests.json";
import {ActivatedRoute, Router} from "@angular/router";
import {BsModalRef} from "ngx-bootstrap/modal";

@Component({
    selector: 'app-activitiy-edit',
    templateUrl: './activity-edit.component.html',
    styleUrls: ['./activity-edit.component.css']
})
export class ActivityEditComponent implements OnInit {
    @ViewChild('uploadedPicture') uploadedProfile: ElementRef;
    @ViewChild('titleActivity') titleActivity: ElementRef;
    @ViewChild('locationActivity') locationActivity: ElementRef;
    @ViewChild('descriptionActivity') descriptionActivity: ElementRef;

    public arrayInterests: { id, name, image }[] = interests;

    constructor(public adminService: AdminService,
                private convertImage: ImageBase64Service
    ) {
    }

    ngOnInit(): void {
        this.adminService.getAllActivities();
    }


    /**
     * This method is to edit the activity
     * @param id
     */
    editActivity(id: number) {
        const closeModal = document.getElementById("myModal"); // to close the modal
        const openModal = document.getElementById("openModal"); // trigger the modal
        const imagePreview = document.getElementById("image--activity-preview").querySelector("#image-preview")

        const clickedActivity = this.adminService.activityArray.find(activity => activity.idActivity == id);

        setTimeout(() => { // open it
            openModal.click();
            this.titleActivity.nativeElement.value = clickedActivity.title;
            this.locationActivity.nativeElement.value = clickedActivity.location;
            this.descriptionActivity.nativeElement.value = clickedActivity.description;

        },)

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

        const closeModal = document.getElementById("close-modal"); // to close the modal
        const activityPicture = this.uploadedProfile.nativeElement.files[0]; // to get the picutre
        const imagePreview = document.getElementById("image--activity-preview").querySelector("#image-preview") // to show the added image
        this.convertImage.convertToBase64(activityPicture, data => { // convert the image
            imagePreview.setAttribute("src", data);
        })
        //Close the modal after 2 sec
        setTimeout(() => {
            closeModal.click(); //close the modal
            this.clearModalFields();
        }, 2000)
    }


    /**
     * To clear the activity's modal fields
     * @private
     */
    private clearModalFields() {

        const imagePreview = document.getElementById("image--activity-preview").querySelector("#image-preview");
        this.uploadedProfile.nativeElement.value = "";
        this.titleActivity.nativeElement.value = "";
        this.locationActivity.nativeElement.value = "";
        this.descriptionActivity.nativeElement.value = "";
        imagePreview.setAttribute("src", "assets/Images/emptyPicture.png");

        let arrayOfCheckInterest = document.getElementById('interests-section')
            .querySelectorAll('input[name=interest]:checked');

        for (let i = 0; i < arrayOfCheckInterest.length; i++) {
            // @ts-ignore
          arrayOfCheckInterest[i].checked = false; // uncheck the selected interests
        }
    }

    /**
     * To delete an activity
     * @param idActivity
     */
    deleteActivity(idActivity: any) {

    }
}
