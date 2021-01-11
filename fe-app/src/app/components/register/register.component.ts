import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService} from "../../services/authenticationService/authentication.service";
import {Gender} from "../../models/gender";
import {User} from "../../models/user";
import {UserService} from "../../services/userService/user.service";
import {ImageBase64Service} from "../../services/convertImageService/image-base64.service";
import {shareReplay} from "rxjs/operators";
import {Router} from "@angular/router";
// @ts-ignore
import interests from '../../json/interests.json'
import {SessionService} from "../../services/sessionService/session.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


    @ViewChild('profilePicture') profilePicture: ElementRef;
    noGenderSelected: boolean;
    submitted: boolean;
    public arrayInterests: { id, name, image }[] = interests;

    public registerForm;

    constructor(public authenticationService: AuthenticationService,
                public sessionService: SessionService,
                public userService: UserService,
                private convertImage: ImageBase64Service,
                private router: Router) {

    }

    ngOnInit(): void {

        this.registerForm = new FormGroup({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            birthDate: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[A-Z-a-z0-9._%+-]+@[A-Z-a-z0-9.-]+\\.[a-z]{2,4}$")]),
            password: new FormControl('', Validators.compose([
                Validators.required,
            ])),
            passwordConfirm: new FormControl('', Validators.compose([
                Validators.required,
            ])),
        })
    }


    /**
     * Register, once the user clicked the register button we get all the input values
     */
    public register(password: string, confirmPassword: string) {
        this.submitted = true;
        let alert = document.getElementById("alert");

        if (this.registerForm.invalid || password != confirmPassword) return;

        setTimeout(() => {
            const errors = document.querySelectorAll('.errors'); // check if there is error
            if (errors.length > 0) return;

            const profilePicture = this.profilePicture.nativeElement.files[0];
            const genderElement = Array.from(document.querySelector('.gender-form') // get the gender value
                .querySelectorAll('input[name=gender]:checked')).map((gender) => {
                return gender.getAttribute('value')
            }).pop();
            //Get the user's interests
            const interests: number[] = Array.from(document.querySelector('#pictures-section')
                .querySelectorAll('input[name=interest]:checked')).map(interest => {
                return Number(interest.getAttribute('value'));
            });

            this.noGenderSelected = genderElement.length == 0;
            if (this.noGenderSelected) return;

            const user = {
                id: 0,
                admin: false,
                blocked: false,
                gender: Gender[genderElement], ...this.registerForm.value
            };
            this.convertImage.convertToBase64(profilePicture, data => {
                user.profilePicture = profilePicture == undefined ? "" : data; // add the new picture if there is any
                this.userService.registerUser(user)
                    .subscribe((response) => { // insert a new user

                        this.authenticationService.loggedInUser = User.makeTrueCopy(response.body);
                        let token = response.headers.get("Authorization");
                        let userName = this.authenticationService.loggedInUser.firstName
                        this.sessionService.saveTokenIntoSessionStorage(token, userName) //Save the token in session storage

                        this.userService.insertUserInterests(interests) // insert the user's interests
                            .pipe(shareReplay(1)).subscribe((response) => {
                            this.authenticationService.loggedInUser.interests = interests;
                        }, error => {
                            console.log(error);
                        })
                        this.authenticationService.isLoggedIn = this.authenticationService.loggedInUser != null;
                        this.router.navigate(['/home']); // navigate to the home page
                    }, error => {

                        alert.innerHTML = error.error.message;
                        alert.style.display = "block"
                        setTimeout(() => {
                            alert.style.display = "none"
                        }, 6000)
                    });
            })
        }, 4)
    }

    /**
     * Check the equality of the passwords in the registration form
     * @param confirm
     */
    public checkPasswords(confirm): boolean { // here we have the 'passwords' group
        let pass = this.registerForm.get('password').value;
        return pass === confirm;
    }
}

export const validUser = {
  username: '00132126',
  password: '123456'
};

export const blankUser = {
  email: '',
  password: ''
};

