import {Injectable} from '@angular/core';
// @ts-ignore
import {User} from "../../models/user";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {shareReplay} from "rxjs/operators";
import {response} from "express";
import {Observable, Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    // //login form for the log in page
    // public loginForm = new FormGroup({
    //     email: new FormControl('', [Validators.required, Validators.email]),
    //     password: new FormControl('', Validators.required)
    // })

    //Register form for the registration page
    // public registerForm = new FormGroup({
    //     firstName: new FormControl('', Validators.required),
    //     lastName: new FormControl('', Validators.required),
    //     birthDate: new FormControl('', Validators.required),
    //     email: new FormControl('', [Validators.required, Validators.email,Validators.pattern("^[A-Z-a-z0-9._%+-]+@[A-Z-a-z0-9.-]+\\.[a-z]{2,4}$")]),
    //     password: new FormControl('', Validators.compose([
    //         Validators.required,
    //     ])),
    //     passwordConfirm: new FormControl('', Validators.compose([
    //         Validators.required,
    //     ])),
    // })


    public isLoggedIn: boolean = false;
    public loggedInUser:User;

    constructor(private  httpClient: HttpClient) {
        let userLogged = localStorage.getItem("loggedIndUser");
        if (userLogged != '') {
            this.isLoggedIn = true;
        }
    }

    /**
     * Authenticate when the login is trying to log in, and set the email in the local storage
     * @param login
     */
    public login(login): Observable<any> {
        return this.httpClient.post(`${environment.apiUrl}/authenticate/login`, login,{observe: "response"}).pipe(shareReplay(1));
    }


}
