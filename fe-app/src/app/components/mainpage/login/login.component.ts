import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authenticationService/authentication.service";
import {response} from "express";
import {User} from "../../../models/user";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    showError: boolean;

    constructor(private router: Router, private activeRout: ActivatedRoute, public authenticationService: AuthenticationService) {
    }

    ngOnInit(): void {
    }

    /**
     * To authenticate if the login has entered the right information
     * @param login
     */
    public login(login) {
        this.authenticationService.login(login).subscribe(response => {
            this.authenticationService.loggedInUser = User.makeTrueCopy(response);
            this.authenticationService.isLoggedIn = this.authenticationService.loggedInUser != null;
            if (this.authenticationService.isLoggedIn) {
                this.router.navigate(['/home']);
                this.showError = false;
                this.authenticationService.isLoggedIn = true;
                // localStorage.setItem("loggedIndUser", "");
            } else {
                this.showError = true;
                this.authenticationService.isLoggedIn = false;
            }
        })
    }
}
