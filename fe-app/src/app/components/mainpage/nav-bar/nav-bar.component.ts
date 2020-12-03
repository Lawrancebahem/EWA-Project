import {Component, OnInit} from '@angular/core';
// @ts-ignore

import * as annyang from 'annyang';
import {Router} from "@angular/router";
import {SpeechServiceService} from "../../../services/speech-voice-service/speech-service.service";
import {AuthenticationService} from "../../../services/authenticationService/authentication.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {shareReplay} from "rxjs/operators";
import {User} from "../../../models/user";
import {UserService} from "../../../services/userService/user.service";

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
                public httpClient: HttpClient,
                private userService:UserService) {

    }

    ngOnInit(): void {
        this.authenticateService.isLoggedIn = false;
        annyang.setLanguage(this.speechService.languages[0])
        let userId = this.authenticateService.getSessionId();
        if (userId != -1) {
            this.httpClient.get(`${environment.apiUrl}/user/` + userId).pipe(shareReplay(1)).subscribe((user) => {
                this.authenticateService.loggedInUser = User.makeTrueCopy(user);
                this.userService.getUserInterests(this.authenticateService.loggedInUser.id).subscribe((interestsArray) => {
                    console.log(interestsArray);
                    this.authenticateService.loggedInUser.interests = interestsArray;
                })
                this.authenticateService.isLoggedIn = true;
            })
        }
    }

    //To logout from the drop down
    public logout() {
        this.authenticateService.logout();
        this.router.navigate(['login'])
    }

}
