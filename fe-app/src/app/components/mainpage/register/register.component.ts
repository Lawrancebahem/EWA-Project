import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';


import {CustomDatePipe} from "../../customDate/customDatePipe";
import {AuthenticationService} from "../../../services/authenticationService/authentication.service";
import {Gender} from "../../../models/gender";
import {User} from "../../../models/user";

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

    constructor(public authenticationService: AuthenticationService) {
    }

    ngOnInit(): void {
    }


    /**
     * Register, once the user clicked the register button we get all the input values
     */
    public register() {
        this.submitted = true;
        setTimeout(() => {

            const errors = document.querySelectorAll('.errors');
            if (errors.length > 0) return;

            const genderElement = Array.from(document.querySelector('.gender-form')
                .querySelectorAll('input[name=gender]:checked')).map((gender) => {
                return gender.getAttribute('value')
            })
            const interests = Array.from(document.querySelector('#pictures-section')
                .querySelectorAll('input[name=interest]:checked')).map(interest => {
                return interest.id
            });
            this.noGenderSelected = genderElement.length == 0;
            if (this.noGenderSelected) return;
            const firstName = this.firstName.nativeElement.value;
            const lastName = this.lastName.nativeElement.value;
            const birthdate = this.birthdate.nativeElement.value;
            const profilePicture = this.profilePicture.nativeElement.value;
            const email = this.email.nativeElement.value;
            const password = this.password.nativeElement.value;
            const gender = Gender[genderElement[0]];
            const user = new User(firstName, lastName, birthdate, gender, profilePicture, email, password, interests);
            console.log("Im done")
        }, 1)

    }

    private transformEnum<T>(enumOb: T): T[keyof T][] {
        const enumValues = Object.keys(enumOb)
            .map(n => Number.parseInt(n))
            .filter(n => !Number.isNaN(n)) as unknown as T[keyof T][];
        return enumValues;
    }
}

