import { Injectable } from '@angular/core';
// @ts-ignore
import {User} from "../../models/user";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  //login form for the log in page
  public loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  //Register form for the registration page
  public registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),

  })

  submitForm(form: NgForm) {
    if (!form.valid) {
      return false;
    } else {
      alert(JSON.stringify(form.value))
    }
  }

  public isLoggedIn:boolean;


  //some fake users
  private users:any[] = [
    {email:"Lawrancebahem@gmail.com", password: "admin"},
    {email:"admin", password: "admin"},
  ];

  constructor() {
    let userLogged = localStorage.getItem( "loggedIndUser");
    if (userLogged != ''){
      this.isLoggedIn = true;
    }
  }

  /**
   * Authenticate when the user is trying to log in, and set the email in the local storage
   * @param user
   */
  public login(user){
    for (let i of this.users){
      if (user.email.toLowerCase() === i.email.toLowerCase()){
        if (user.password.toLowerCase() == i.password.toLowerCase()){
          localStorage.setItem("loggedIndUser", JSON.stringify(i.email));
          this.isLoggedIn = true;
          return this.isLoggedIn;
        }
      }
    }
    return false;
  }

  /**
   * Log out, and remove the email from the local storage
   */
  public logout(){
    localStorage.setItem("loggedIndUser", "");
    this.isLoggedIn = false;
  }

  public authenticateRegistration(user:User){

  }

  // public validateEmail(element){
  //   let emailRegex = '(?:[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'+/=?^_`{|}~-]+)|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])")@(?:(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-][a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])';
  //   if(element.val() === ''){
  //     showError(element, "Vul een email in");
  //     isValidData = false;
  //   }
  //   else if(!element.val().match(emailRegex)){
  //     showError(element, "Incorrecte email");
  //     isValidData = false;
  //   }
  // }


}
