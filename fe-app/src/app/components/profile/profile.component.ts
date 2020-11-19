import {AfterContentChecked, AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {mod} from "ngx-bootstrap/chronos/utils";
import {User} from "../../models/user";
import {ImageBase64Service} from "../../services/convetImageService/image-base64.service";
import {UserService} from "../../services/userService/user.service";
import {AuthenticationService} from "../../services/authenticationService/authentication.service";
// @ts-ignore
import interests from '../../json/interests.json'
// @ts-ignore
import {Interest} from "../../models/Interest";
// @ts-ignore
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    @ViewChild('uploadedProfile') uploadedProfile: ElementRef;
    public editMyInterestsIsClicked = false;
    public hasChanged:boolean= false;
    public arrayInterests: {name, image}[] = interests;

    constructor( public userService: UserService ,
                 private convertImage:ImageBase64Service,
                 public authenticationService:AuthenticationService) {

    }

    ngOnInit(): void {
        // if (this.authenticationService.isLoggedIn){
        //     let image = document.getElementById("profileImage");
        //     let userProfilePicture = this.authenticationService.loggedInUser.profilePicture;
        //     image.style.backgroundImage = userProfilePicture;
        //     // image.setAttribute("src", userProfilePicture);
        // }
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
            console.log(data);
        })
        //Close the modal after 1.5sec
        setTimeout(function (){
            closeModal.click();
        },1500)
    }
}
