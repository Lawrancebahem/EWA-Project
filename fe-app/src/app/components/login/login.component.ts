import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../services/authenticationService/authentication.service";
import {response} from "express";
import {User} from "../../models/user";
import {shareReplay} from "rxjs/operators";
import {UserService} from "../../services/userService/user.service";
import {SessionService} from "../../services/sessionService/session.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    showError: boolean;

    constructor(private router: Router, private activeRout: ActivatedRoute,
                public authenticationService: AuthenticationService,
                private userService: UserService,
                private sessionStorage: SessionService) {
    }

    ngOnInit(): void {
    }

    /**
     * To authenticate if the login has entered the right information
     * @param login
     */
    public login(login) {
        this.authenticationService.login(login).subscribe(response => {

            this.authenticationService.loggedInUser = User.makeTrueCopy(response.body);
            this.authenticationService.isLoggedIn = this.authenticationService.loggedInUser != null;
            if (this.authenticationService.isLoggedIn) {
                let token = response.headers.get("Authorization");
                let userName = this.authenticationService.loggedInUser.firstName
                this.sessionStorage.saveTokenIntoSessionStorage(token,userName); //Save the token in session storage
                //Get the user's interests
                this.userService.getUserInterests()
                    .subscribe((interestsArray) => {
                    console.log(interestsArray);
                    this.authenticationService.loggedInUser.interests = interestsArray;
                })
                //Navigate to home
                this.router.navigate(['/home']);
                this.showError = false;

            } else {
                this.sessionStorage.saveTokenIntoSessionStorage(null, null); // that means the user still logged out
                this.showError = true;
                this.authenticationService.isLoggedIn = false;
            }
        },error => {
            this.showError = true;
        })
    }
}
