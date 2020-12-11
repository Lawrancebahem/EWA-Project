import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AdminService} from "../../../../services/admin-service/admin.service";
import {ImageBase64Service} from "../../../../services/convertImageService/image-base64.service";
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import interests from "../../../../json/interests.json";
import {ActivatedRoute, Router} from "@angular/router";
import {BsModalRef} from "ngx-bootstrap/modal";
import {ActivityService} from "../../../../services/activityService/activity.service";
import {Activity} from "../../../../models/activity";
import {response} from "express";
import set = Reflect.set;

@Component({
    selector: 'app-activitiy-edit',
    templateUrl: './activity-edit.component.html',
    styleUrls: ['./activity-edit.component.css']
})
export class ActivityEditComponent implements OnInit {

    @ViewChild('uploadedImage') uploadedImage: ElementRef;
    @ViewChild('titleActivity') titleActivity: ElementRef;
    @ViewChild('locationActivity') locationActivity: ElementRef;
    @ViewChild('descriptionActivity') descriptionActivity: ElementRef;

    public arrayInterests: { id, name, image }[] = interests;

    public selectedActivityId: number = 0;


    constructor(public adminService: AdminService,
                private convertImage: ImageBase64Service,
                private activityService: ActivityService
    ) {

    }

    ngOnInit(): void {
        if (!(this.adminService.activityArray.length > 0)) {
            this.adminService.getAllActivities();
        }
        if (!(this.adminService.categoryArray.length > 0)) {
            this.adminService.getAllCategories();  // to make sure that the array of category is loaded
        }
    }


    /**
     * Once the admin clicks on adding new activity, it will take
     */
    addNewActivity() {

        let successMessage = document.getElementById("success-message-activity"); // to show success message if its done
        let uploadIcon = document.getElementById("upload-activity-icon");
        uploadIcon.classList.add("uploadIcon") // let the icon move up and down

        const closeModal = document.getElementById("close-modal"); // to close the modal
        const activityPicture = this.uploadedImage.nativeElement.files[0]; // to get the picture
        const imagePreview = document.getElementById("image--activity-preview").querySelector("#image-preview") // to show the added image

        //get the selected interests
        const selectedInterests: number[] = Array.from(document.getElementById('interests-section')
            .querySelectorAll('input[name=interest]:checked')).map(interest => {
            return Number(interest.getAttribute('value'));
        });
        //get the selected categories
        const selectedCategories: number[] = Array.from(document.getElementById('category-section')
            .querySelectorAll('input[name=category]:checked')).map(category => {
            return Number(category.getAttribute('value'));
        });

        this.convertImage.convertToBase64(activityPicture, image => { // convert the image

            let title = this.titleActivity.nativeElement.value
            let location = this.locationActivity.nativeElement.value
            let description = this.descriptionActivity.nativeElement.value

            let selectedActivity = this.getSelectedActivity();
            console.log(selectedActivity);
            if (selectedActivity != null) {
                image = activityPicture == undefined ? selectedActivity.image : image; // if there is no image uploaded, get the original picture of this activity
            }

            imagePreview.setAttribute("src", image);
            let newActivity = {
                id: this.selectedActivityId,
                title: title,
                description: description,
                image: image,
                location: location,
                show: true
            };

            //Add the activity
            this.adminService.addNewActivity(newActivity).subscribe((addedActivity) => {
                let activityId = addedActivity.id
                //Insert the selected interests for this activity
                this.adminService.addInterestsToActivity(activityId, selectedInterests).subscribe((inserted) => {

                }, error => {
                    console.log(error);
                });
                //Insert the categories for this activity
                this.adminService.addCategoriesToActivity(activityId, selectedCategories).subscribe((inserted) => {
                    console.log(inserted);
                    successMessage.style.display = "block"
                    setTimeout(() => {
                        closeModal.click(); //close the modal
                        successMessage.style.display = "none"
                        this.updateArray(this.selectedActivityId, addedActivity);
                        uploadIcon.classList.remove("uploadIcon") // remove the animation (moving up and down)
                        this.clearModalFields(); // clear fields
                    }, 2500)

                }, error => {
                    console.log(error);
                });
            }, error => {
                console.log(error);
            })
        })
    }


    /**
     * This method is to edit the activity
     * @param id
     */
    editActivity(id: number) {
        this.selectedActivityId = id;

        // const closeModal = document.getElementById("myModal"); // to close the modal
        const openModal = document.getElementById("openModal"); // trigger the modal
        const imagePreview = document.getElementById("image--activity-preview").querySelector("#image-preview")

        const clickedActivity = this.adminService.activityArray.find(activity => activity.id == id); // get the clicked activity information

        //Get the interests of this activity
        this.activityService
            .getActivityInterest(clickedActivity.id)
            .subscribe((interests) => {
                //loop thorough the interests, check these interests in the fields of modal
                for (let i = 0; i < interests.length; i++) {
                    let interestCheckBox = <HTMLInputElement>document.getElementById(interests[i] + "");
                    interestCheckBox.checked = true;
                }

            }, error => {
                console.log(error);
            });
        //get the categories of this activity
        this.activityService.getActivityCategory(clickedActivity.id)
            .subscribe((categories) => {
                //To check the categories of this activity
                for (let i = 0; i < categories.length; i++) {
                    let categoryCheckBox = <HTMLInputElement>document.getElementById(categories[i] + "");
                    categoryCheckBox.checked = true;
                }
            }, error => {
                console.log(error);
            })
        this.titleActivity.nativeElement.value = clickedActivity.title;
        this.locationActivity.nativeElement.value = clickedActivity.location;
        this.descriptionActivity.nativeElement.value = clickedActivity.description;
        imagePreview.setAttribute("src", clickedActivity.image);


        setTimeout(() => { // to make sure that the modal is open
            openModal.click();
        },)
    }


    /**
     * To clear the activity's modal fields
     * @private
     */
    public clearModalFields() {

        const imagePreview = document.getElementById("image--activity-preview").querySelector("#image-preview");
        this.uploadedImage.nativeElement.value = "";
        this.titleActivity.nativeElement.value = "";
        this.locationActivity.nativeElement.value = "";
        this.descriptionActivity.nativeElement.value = "";
        imagePreview.setAttribute("src", "assets/Images/emptyPicture.png");

        let arrayOfCheckedInterest = document.getElementById('interests-section')
            .querySelectorAll('input[name=interest]:checked');

        let arrayOfCheckedCategory = document.getElementById('category-section')
            .querySelectorAll('input[name=category]:checked');

        for (let i = 0; i < arrayOfCheckedInterest.length; i++) {
            // @ts-ignore
            arrayOfCheckedInterest[i].checked = false; // uncheck the selected interests
        }
        for (let i = 0; i < arrayOfCheckedCategory.length; i++) {
            // @ts-ignore
            arrayOfCheckedCategory[i].checked = false;
        }
    }

    /**
     * To delete an activity
     * @param idActivity
     */
    deleteActivity() {
        let idActivity = this.selectedActivityId;

        const closeModal = document.getElementById("close-modal"); // to close the modal


        this.adminService.deleteAnActivity(idActivity).subscribe((response) => {
            setTimeout(() => {
                this.deleteFromActivityArray(idActivity); // delete the activity from the array
                this.hideConfirmationModal(); // hide the confirmation model
                closeModal.click();// close the editing modal
            }, 2000)

            console.log(response);
        }, error => {
            console.log(error);
        })
    }

    /**
     * To set this selectedActivity to null, once the admin click add new activity(which means there is nothing to update)
     * and clear the fields of the modal
     */
    setSelectedToNull() {
        this.selectedActivityId = 0; // set the selected to 0
        this.clearModalFields(); //clear the fields
    }


    /**
     * To update the array of the activity
     * @param id
     * @param activity
     */
    updateArray(id, activity?) {
        let foundActivity = this.adminService.activityArray.find(activity => activity.id == id);
        if (foundActivity != null) {
            let index = this.adminService.activityArray.indexOf(foundActivity);
            this.adminService.activityArray.splice(index, 1, activity);
        } else {
            this.adminService.activityArray.push(activity);
        }
    }

    /***
     * To delete certain activity from the array
     * @param id
     */
    deleteFromActivityArray(id) {
        let foundActivity = this.adminService.activityArray.find(activity => activity.id == id);
        let index = this.adminService.activityArray.indexOf(foundActivity);
        this.adminService.activityArray.splice(index, 1);
    }

    /**
     * To get the selected activity
     */
    getSelectedActivity() {
        return this.adminService.activityArray.find(activity => activity.id == this.selectedActivityId);
    }

    /**
     * To hide the confirmation modal, when deleting an activity
     */
    public hideConfirmationModal() {
        let deleteModal = document.getElementById("delete-activity-icon");
        deleteModal.style.display = "none"
    }

    confirmDeletion() {
        let deleteModal = document.getElementById("delete-activity-icon");
        deleteModal.style.display = "block"
    }
}
