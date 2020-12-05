import {Component, OnInit} from '@angular/core';
// @ts-ignore

import * as annyang from 'annyang';
import {Router} from "@angular/router";
import {SpeechServiceService} from "../../services/speech-voice-service/speech-service.service";
import {AuthenticationService} from "../../services/authenticationService/authentication.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {shareReplay} from "rxjs/operators";
import {User} from "../../models/user";
import {UserService} from "../../services/userService/user.service";
import {SessionService} from "../../services/sessionService/session.service";


@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    isLoggedIn: boolean;

    constructor(private router: Router,
                public speechService: SpeechServiceService,
                public authenticateService: AuthenticationService,
                public sessionService: SessionService,
                public httpClient: HttpClient,
                private userService: UserService) {

    }

    ngOnInit(): void {
        // set as default user is logged out, it will be checked later if the user has already logged in
        this.authenticateService.isLoggedIn = false;
        annyang.setLanguage(this.speechService.languages[0]) // set the speech recognition language to dutch
        let userToken = this.sessionService.getTokenFromSessionStorage();

        if (userToken != null) {
            this.httpClient.get(`${environment.apiUrl}/user`)  // get the user (if is already logged in and has a valid token)
                .pipe(shareReplay(1))
                .subscribe((user) => {
                    this.authenticateService.loggedInUser = User.makeTrueCopy(user);
                    this.userService.getUserInterests().subscribe((interestsArray) => {
                        this.authenticateService.loggedInUser.interests = interestsArray; // get the user's interests
                    })
                    this.authenticateService.isLoggedIn = true;
                }, error => {
                    console.log(error.error.message)
                    //Make request to refresh the token
                    let response = this.httpClient.get(`${environment.apiUrl}/authenticate/token-refresh`,
                        {observe: "response"}).pipe(shareReplay(1));
                    response.subscribe((response) => {
                        //extract the token from the header
                        let newToken = response.headers.get("Authorization");
                        //set the refreshed token in the storage
                        this.sessionService.saveTokenIntoSessionStorage(newToken, this.sessionService.currentUserName);
                    }, error => {
                        console.log(error.error.message)
                        this.logout(); // log out and direct the user to log in page
                    })

                })
        }
    }

    //To logout from the drop down
    public logout() {
        this.sessionService.signOut(); // remove session
        this.authenticateService.isLoggedIn = false; // set isLogged in false
        this.router.navigate(['login'])
    }
}
