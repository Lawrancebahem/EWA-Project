import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {mod} from "ngx-bootstrap/chronos/utils";
import {User} from "../../models/user";
import {ImageBase64Service} from "../../services/convetImageService/image-base64.service";
import {UserService} from "../../services/userService/user.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    @ViewChild('uploadedProfile') uploadedProfile: ElementRef;
    public editMyInterestsIsClicked = false;
    public myInterestsText = "Mijn interesses";
    public buttonInterestsText = "Wijzig mijn interesses"
    public hasChanged:boolean= false;

    constructor( public userService: UserService ,private convertImage:ImageBase64Service) {
    }

    ngOnInit(): void {
    }

    /**
     * When the user clicks on the button, all interests will be displayed
     */
    editMyInterests() {
        this.editMyInterestsIsClicked = !this.editMyInterestsIsClicked;
        if (this.editMyInterestsIsClicked){
          this.myInterestsText = "Selecteer interesses";
          this.buttonInterestsText = "Interesses opslaan"
        }else {
          this.myInterestsText = "Mijn interesses";
        this.buttonInterestsText = "Wijzig mijn interesses"
        }

    }

    /**
     * When the user adds a new profile picture, fire this method up
     */
    onEditPicture(){
        const closeModal = document.getElementById("close-modal");
        const profilePicture = this.uploadedProfile.nativeElement.files[0];
        const imagePreview = document.querySelector("#profile-picture-preview")
        this.convertImage.convertToBase64(profilePicture, data => {
            imagePreview.setAttribute("src", data);
        })
        //Close the modal after 1.5sec
        setTimeout(function (){
            closeModal.click();
        },1500)
    }
}
