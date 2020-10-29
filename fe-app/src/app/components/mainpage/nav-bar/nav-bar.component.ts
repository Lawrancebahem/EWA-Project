import {Component, OnInit} from '@angular/core';
// @ts-ignore

import * as annyang from 'annyang';
import {AuthenticationService} from "../../services/authenticationService/authentication.service";
import { Router} from "@angular/router";
import {SpeechServiceService} from "../../services/speech-voice-service/speech-service.service";

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    isLoggedIn: boolean;

    constructor(private router: Router,
        public speechService: SpeechServiceService, public authenticateService: AuthenticationService) {

    }

    ngOnInit(): void {
        annyang.setLanguage(this.speechService.languages[0])

    }

    //To logout from the drop down
    public logout() {
        this.authenticateService.logout();
        this.router.navigate(['login'])
    }

}
