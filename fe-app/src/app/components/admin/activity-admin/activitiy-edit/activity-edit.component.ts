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
              private convertImage: ImageBase64Service,
              private httpClient: HttpClient,
              private activateRoute:ActivatedRoute,
              private router:Router,
             ) { }

  ngOnInit(): void {
    this.adminService.getAllActivities();
  }


  editActivity(id:number){
    const closeModal = document.getElementById("myModal"); // to close the modal
    const openModal = document.getElementById("openModal"); // trigger the modal
    const imagePreview = document.getElementById("image--activity-preview").querySelector("#image-preview")

    const clickedActivity = this.adminService.activityArray.find(activity => activity.idActivity == id);

    setTimeout(()=>{ // open it
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

    console.log(selectedInterests);

    const closeModal = document.getElementById("close-modal");
    const activityPicture = this.uploadedProfile.nativeElement.files[0];
    const imagePreview = document.getElementById("image--activity-preview").querySelector("#image-preview")
    this.convertImage.convertToBase64(activityPicture, data => {
      imagePreview.setAttribute("src", data);
      console.log(data);
    })
    //Close the modal after 2 sec
    setTimeout(function () {
      closeModal.click();
    }, 2000)
  }


  /**
   * To delete an activity
   * @param idActivity
   */
  deleteActivity(idActivity: any) {

  }
}
