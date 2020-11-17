import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';


import {CustomDatePipe} from "../../customDate/customDatePipe";
import {AuthenticationService} from "../../../services/authenticationService/authentication.service";
import {Gender} from "../../../models/gender";
import {User} from "../../../models/user";
import {UserService} from "../../../services/userService/user.service";
import {response} from "express";
import {ImageBase64Service} from "../../../services/convetImageService/image-base64.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ErrorHandler} from "../../../services/error-handler/error-handler";
import {catchError, shareReplay} from "rxjs/operators";
import {Router} from "@angular/router";
// @ts-ignore
import interests from '../../../json/interests.json'
// @ts-ignore
import {Interest} from "../../../models/Interest";
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    @ViewChild('firstName') firstName: ElementRef;
    @ViewChild('lastName') lastName: ElementRef;
    @ViewChild('birthDate') birthdate: ElementRef;
    @ViewChild('profilePicture') profilePicture: ElementRef;
    @ViewChild('email') email: ElementRef;
    @ViewChild('password') password: ElementRef;
    noGenderSelected: boolean;
    submitted: boolean;
    public emailAlreadyInUse ="";
    public arrayInterests: Interest[] = interests;
    constructor(public authenticationService: AuthenticationService,
                public userService: UserService,
                private convertImage: ImageBase64Service,
                private router: Router) {

    }

    ngOnInit(): void {
    }


    /**
     * Register, once the user clicked the register button we get all the input values
     */
    public register() {

        let test = document.getElementById("shopping");
        this.submitted = true;
        if (this.authenticationService.registerForm.invalid) return;
        setTimeout(() => {
            const errors = document.querySelectorAll('.errors'); // check if there is error
            if (errors.length > 0) return;

            const genderElement = Array.from(document.querySelector('.gender-form') // get the gender value
                .querySelectorAll('input[name=gender]:checked')).map((gender) => {
                return gender.getAttribute('value')
            })
            const interests = Array.from(document.querySelector('#pictures-section')
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
                const object: User = <User>{
                    "id": 0,
                    "firstName": firstName,
                    "lastName": lastName,
                    "birthDate": birthdate,
                    "gender": gender,
                    "profilePicture": profilePicture == undefined ? "" : data,
                    "email": email,
                    "password": password,
                    "interests": interests,
                }
                console.log(object);
                this.userService.saveOrUpdate(object).pipe(shareReplay(1)).subscribe((response) => {
                    this.authenticationService.loggedInUser = User.makeTrueCopy(response);
                    this.authenticationService.isLoggedIn = this.authenticationService.loggedInUser != null;
                    localStorage.setItem("loggedIndUser", JSON.stringify(this.authenticationService.loggedInUser.id));
                    this.router.navigate(['/home']);
                },error  => {
                    this.emailAlreadyInUse = error.error.message;
                    console.log(error.error.message);
                });
            })
        }, 1)

    }

    private transformEnum<T>(enumOb: T): T[keyof T][] {
        const enumValues = Object.keys(enumOb)
            .map(n => Number.parseInt(n))
            .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][];
        return enumValues;
    }
}

