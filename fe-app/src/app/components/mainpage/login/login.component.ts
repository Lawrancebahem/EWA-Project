import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authenticationService/authentication.service";
import {response} from "express";
import {User} from "../../../models/user";
import {shareReplay} from "rxjs/operators";
import {UserService} from "../../../services/userService/user.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    showError: boolean;

    constructor(private router: Router, private activeRout: ActivatedRoute,
                public authenticationService: AuthenticationService,
                private userService: UserService) {
    }

    ngOnInit(): void {
    }

    /**
     * To authenticate if the login has entered the right information
     * @param login
     */
    public login(login) {
        this.authenticationService.login(login).subscribe(response => {
            console.log(response);
            this.authenticationService.loggedInUser = User.makeTrueCopy(response);
            this.authenticationService.isLoggedIn = this.authenticationService.loggedInUser != null;
            if (this.authenticationService.isLoggedIn) {
                this.userService.getUserInterests(this.authenticationService.loggedInUser.id).subscribe((interestsArray) => {
                    console.log(interestsArray);
                    this.authenticationService.loggedInUser.interests = interestsArray;
                })
                this.router.navigate(['/home']);
                this.showError = false;
                this.authenticationService.isLoggedIn = true;
                localStorage.setItem("loggedIndUser", JSON.stringify(this.authenticationService.loggedInUser.id));
            } else {
                this.showError = true;
                this.authenticationService.isLoggedIn = false;
            }
        })
    }
}
