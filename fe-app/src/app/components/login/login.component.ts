import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authenticationService/authentication.service";
import {response} from "express";
import {User} from "../../models/user";
import {shareReplay} from "rxjs/operators";
import {UserService} from "../../services/userService/user.service";
import {SessionService} from "../../services/sessionService/session.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    //login form for the log in page
    public loginForm;

    constructor(private router: Router, private activeRout: ActivatedRoute,
                public authenticationService: AuthenticationService,
                private userService: UserService,
                private sessionStorage: SessionService) {
    }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', Validators.required)
        })
    }

    /**
     * To authenticate if the login has entered the right information
     * @param login
     */
    public login(login) {
        let alert = document.getElementById("error-login");
        this.authenticationService.login(login).subscribe(response => {

            this.authenticationService.loggedInUser = User.makeTrueCopy(response.body);
            this.authenticationService.isLoggedIn = this.authenticationService.loggedInUser != null;

            if (this.authenticationService.isLoggedIn) {
                let token = response.headers.get("Authorization");
                let userName = this.authenticationService.loggedInUser.firstName
                //Save the token in session storage
                this.sessionStorage.saveTokenIntoSessionStorage(token,userName);

                //Get the user's interests
                this.userService.getUserInterests()
                    .subscribe((interestsArray) => {
                    this.authenticationService.loggedInUser.interests = interestsArray;
                })

                //Navigate to home
                this.router.navigate(['/home']);

            } else {
                this.sessionStorage.saveTokenIntoSessionStorage(null, null); // that means the user still logged out
                this.authenticationService.isLoggedIn = false;
            }
        },error => {
            console.log("The error message loggin in " + error.error.message);
            alert.innerHTML = error.error.message;
            alert.style.display = "block"
            setTimeout( () => {
                alert.style.display = "none"
            }, 6000)
        })
    }


    /**
     * To showe the confirmation modal
     */
    public showConfirmationModal(){
        let confirmationModal = document.getElementById("reset-icon");
        confirmationModal.style.display = "block"

    }

    /**
     * To hide the reset modal
     */
    hideConfirmationModal() {
        let confirmationModal = document.getElementById("reset-icon");
        confirmationModal.style.display = "none"
    }
    /**
     * Reset the password, once the user clicks on the button
     * @param userEmail
     */
    public resetPassword(userEmail:string) {
        let successMessage = document.getElementById("success-message-send");

        this.userService.resetPassword(userEmail).subscribe((response)=>{
            successMessage.style.display = "block"
            setTimeout(()=>{
                successMessage.style.display = "none"
                this.hideConfirmationModal();
            },2000)
        },error => {
            console.log(error);
        })
    }


}
