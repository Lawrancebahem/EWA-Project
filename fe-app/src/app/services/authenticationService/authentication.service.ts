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


    error_messages = {
        'firstName': [
            {type: 'required', message: 'Voornaam Name is verplicht veld.'},
        ],

        'lastName': [
            {type: 'required', message: 'Achternaam is verplicht veld.'}
        ],
        'birthdate': [
            {type: 'required', message: 'GeboorteDatum is verplicht veld.'}
        ],

        'email': [
            {type: 'minlength', message: 'Email te kort.'},
            {type: 'maxlength', message: 'Email is te lang.'},
            {type: 'required', message: 'Email is verplicht veld'}
        ],

        'password': [
            {type: 'required', message: 'Wachtwoord is verplicht veld'},
            {type: 'minlength', message: 'Wachtwoord is te kort.'},
            {type: 'maxlength', message: 'Wachtwoord is te lang.'}
        ],
        'passwordConfirm': [
            {type: 'required', message: 'Wachtwoord is verplicht veld.'},
            {type: 'minlength', message: 'Wachtwoord te kort.'},
            {type: 'maxlength', message: 'Wachtwoord te lang.'}
        ],
    }

    //login form for the log in page
    public loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required)
    })

    //Register form for the registration page
    public registerForm = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        birthDate: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email,Validators.pattern("^[A-Z-a-z0-9._%+-]+@[A-Z-a-z0-9.-]+\\.[a-z]{2,4}$")]),
        password: new FormControl('', Validators.compose([
            Validators.required,
        ])),
        passwordConfirm: new FormControl('', Validators.compose([
            Validators.required,
        ])),
    })


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
        return this.httpClient.post(`${environment.apiUrl}/authenticate/login`, login).pipe(shareReplay(1));
    }

    /**
     * Log out, and remove the email from the local storage
     */
    public logout() {
        localStorage.setItem("loggedIndUser", '-1');
        this.isLoggedIn = false;
    }

    public authenticateRegistration(user: User) {

    }

    /**
     * Check the equality of the passwords in the registration form
     * @param confirm
     */
    public checkPasswords(confirm): boolean { // here we have the 'passwords' group
        let pass = this.registerForm.get('password').value;
        return pass === confirm;

    }

    public getSessionId():number{
        return JSON.parse(localStorage.getItem("loggedIndUser"));

    }

    /**
     * validate email
     * @param element
     */
    // public validateEmail(element) {
    //     const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //     return element.value.match(emailRegex);
    //
    // }

}
