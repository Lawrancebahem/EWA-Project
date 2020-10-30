import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authenticationService/authentication.service";

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
     * To authenticate if the user has entered the right information
     * @param user
     */
    public login(user) {
        const isLogged = this.authenticationService.login(user);
        if (isLogged) {
            this.router.navigate(['/home']);
            this.showError = false;
            this.authenticationService.isLoggedIn = true;
        } else {
            this.showError = true;
            this.authenticationService.isLoggedIn = false;
        }
    }

}
