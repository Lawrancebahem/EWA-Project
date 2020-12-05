import {AfterContentChecked, AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {mod} from "ngx-bootstrap/chronos/utils";
import {User} from "../../models/user";
import {ImageBase64Service} from "../../services/convertImageService/image-base64.service";
import {UserService} from "../../services/userService/user.service";
import {AuthenticationService} from "../../services/authenticationService/authentication.service";
// @ts-ignore
import interests from '../../json/interests.json'
// @ts-ignore
import {Interest} from "../../models/Interest";
import {Gender} from "../../models/gender";
import {shareReplay} from "rxjs/operators";

// @ts-ignore
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    @ViewChild('uploadedProfile') uploadedProfile: ElementRef;

    @ViewChild('firstName') firstName: ElementRef;
    @ViewChild('lastName') lastName: ElementRef;
    @ViewChild('birthDate') birthdate: ElementRef;
    @ViewChild('uploadedProfile') profilePicture: ElementRef;
    @ViewChild('email') email: ElementRef;
    @ViewChild('password') password: ElementRef;
    noGenderSelected: boolean;
    submitted: boolean;
    public emailAlreadyInUse = "";
    public editMyInterestsIsClicked = false;
    public hasChanged: boolean = false;

    public arrayInterests: { id, name, image }[] = interests;


    constructor(public userService: UserService,
                private convertImage: ImageBase64Service,
                public authenticationService: AuthenticationService) {

    }

    ngOnInit(): void {
    }

    /**
     * When the user adds a new profile picture, fire this method up
     */
    onEditPicture() {
        const closeModal = document.getElementById("close-modal");
        const profilePicture = this.uploadedProfile.nativeElement.files[0];
        const imagePreview = document.querySelector("#profile-picture-preview")
        this.convertImage.convertToBase64(profilePicture, data => {
            imagePreview.setAttribute("src", data);
            console.log(data);
        })
        //Close the modal after 1.5sec
        setTimeout(function () {
            closeModal.click();
        }, 1500)
    }


    /***
     * To update the user information
     */
    public onUpdate() {
        this.submitted = true;
        setTimeout(() => {
            const errors = document.querySelectorAll('.error'); // check if there is error
            console.log("erros " + errors.length)
            if (errors.length > 0) return;

            const genderElement = Array.from(document.querySelector('.gender-form') // get the gender value
                .querySelectorAll('input[name=gender]:checked')).map((gender) => {
                return gender.getAttribute('value')
            })
            const interests: number[] = Array.from(document.querySelector('#pictures-section')
                .querySelectorAll('input[name=interest]:checked')).map(interest => {
                return Number(interest.getAttribute('value'));
            });

            this.noGenderSelected = genderElement.length == 0;
            if (this.noGenderSelected) return;
            const firstName = this.firstName.nativeElement.value;
            const lastName = this.lastName.nativeElement.value;
            const birthdate = this.birthdate.nativeElement.value;
            const profilePicture = this.profilePicture.nativeElement.files[0];
            const email = this.email.nativeElement.value;
            const password = this.password.nativeElement.value;
            const gender = Gender[genderElement[0]];
            this.convertImage.convertToBase64(profilePicture, data => {
                //Add the user's information
                const object: User = <User>{
                    "id":0,
                    "firstName": firstName,
                    "lastName": lastName,
                    "birthDate": birthdate,
                    "gender": gender,
                    "profilePicture": profilePicture == undefined ? this.authenticationService.loggedInUser.profilePicture : data,
                    "email": email,
                    "password": password,
                    "admin": this.authenticationService.loggedInUser.admin
                }
                // update the user
                this.userService.update(object).pipe(shareReplay(1)).subscribe((response) => {
                    this.authenticationService.loggedInUser = User.makeTrueCopy(response);
                    // update the user's interests
                    this.userService.insertUserInterests(interests)
                        .pipe(shareReplay(1)).subscribe((response) => {
                        this.authenticationService.loggedInUser.interests = interests;
                    }, error => {
                        console.log(error);
                    })
                }, error => {
                    this.emailAlreadyInUse = error.error.message;
                    console.log(error.error.message);
                });
            })
        }, 5)
    }
}
