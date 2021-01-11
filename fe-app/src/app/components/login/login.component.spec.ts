import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {RouterModule} from "@angular/router";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthenticationService} from "../../services/authenticationService/authentication.service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {User} from "../../models/user";
import {Gender} from "../../models/gender";
import {of} from "rxjs";
import {RouterTestingModule} from "@angular/router/testing";
import {CategoriesHomePageComponent} from "../HomePage/categories-home-page/categories-home-page.component";
import {NavBarComponent} from "../nav-bar/nav-bar.component";


fdescribe('LoginComponent', () => {
    let loginComponent: LoginComponent;
    let loginComponentHtml: HTMLElement;
    let fixtureLogin: ComponentFixture<LoginComponent>;
    let httpMock: HttpTestingController;
    let authService: AuthenticationService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoginComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [HttpClientTestingModule, RouterModule.forRoot([
                {path: 'home', component: CategoriesHomePageComponent}]), FormsModule, ReactiveFormsModule,],
            providers: [AuthenticationService]

        })
            .compileComponents();

        authService = TestBed.inject(AuthenticationService);
        httpMock = TestBed.inject(HttpTestingController);

    });


    beforeEach(() => {
        fixtureLogin = TestBed.createComponent(LoginComponent);
        loginComponent = fixtureLogin.componentInstance;
        loginComponentHtml = fixtureLogin.debugElement.nativeElement;
        fixtureLogin.detectChanges();
    });


    it('should create', () => {
        expect(loginComponent).toBeTruthy();
    });


    /**
     * Check the input fields of login page
     * Unit
     */
    it('login input should update component property', () => {
        //Get the fields
        const email: HTMLInputElement = loginComponentHtml.querySelector("#form-login-email-password").querySelector("#email");
        const password: HTMLInputElement = loginComponentHtml.querySelector("#form-login-email-password").querySelector("#password");

        email.value = "lawrance@gmail.com"
        password.value = "admin"
        email.dispatchEvent(new Event('input'))
        password.dispatchEvent(new Event('input'))

        fixtureLogin.detectChanges(); //angular should be updated

        //Check if the values are changed of the fields
        expect(loginComponent.loginForm.get('email').value === email.value).toBeTrue()
        expect(loginComponent.loginForm.get('password').value === password.value).toBeTrue();
        //
        // fixtureLogin.whenStable().then(() => {
        // });
    });

    /**
     * Test logging in with using the spy method
     * Integration
     */
    it('login button should react and authentication method should be called', async (done: DoneFn) => {

        //Get the fields and the submit button
        const email: HTMLInputElement = loginComponentHtml.querySelector("#form-login-email-password").querySelector("#email");
        const password: HTMLInputElement = loginComponentHtml.querySelector("#form-login-email-password").querySelector("#password");
        const loginBtn: HTMLButtonElement = loginComponentHtml.querySelector("#form-login-email-password").querySelector("#submit");

        email.value = "lawrance@gmail.com"
        password.value = "admin"
        email.dispatchEvent(new Event('input'))
        password.dispatchEvent(new Event('input'))


        fixtureLogin.detectChanges(); //should update
        const authenticationService = fixtureLogin.debugElement.injector.get(AuthenticationService);
        const user: User = new User(0, 'Lawrance', "Bahem", new Date(), Gender.MAN, "", "lawrance@gmail.com", "admin", [], true, false);

        //Spy on the login method of the authentication service
        let spy = spyOn(authenticationService, 'login').and.returnValue(of(user));

        loginBtn.click();

        fixtureLogin.detectChanges();

        // check if the button has been clicked
        spy.calls.mostRecent().returnValue.subscribe((response) => {
            fixtureLogin.detectChanges();
            expect(response != null).toBeTrue();
            done();
        });
    });


    /**
     * Test login in with http mock
     * Integration
     */
    it('should log in', () => {

        //Get the fields
        const email: HTMLInputElement = loginComponentHtml.querySelector("#form-login-email-password").querySelector("#email");
        const password: HTMLInputElement = loginComponentHtml.querySelector("#form-login-email-password").querySelector("#password");
        const loginBtn: HTMLButtonElement = loginComponentHtml.querySelector("#form-login-email-password").querySelector("#submit");

        email.value = "lawrance@gmail.com"
        password.value = "admin"
        email.dispatchEvent(new Event('input'))
        password.dispatchEvent(new Event('input'))
        loginBtn.dispatchEvent(new Event('button'))
        fixtureLogin.detectChanges();

        const user: User = new User(0, 'Lawrance', "Bahem", new Date(), Gender.MAN, "", "lawrance@gmail.com", "admin", [], true, false);

        loginBtn.click();

        //Check the if there is a POST request sent to this url
        const req = httpMock.expectOne("http://localhost:8080/authenticate/login")
        expect(req.request.method).toBe("POST")
        req.flush(user);

        fixtureLogin.detectChanges();

        //Check the logged in user's name and email of authentication service
        expect(loginComponent.authenticationService.isLoggedIn).toBeTrue()
        expect(loginComponent.authenticationService.loggedInUser.firstName === "lawrance")
        expect(loginComponent.authenticationService.loggedInUser.email === "lawrance@gmail.com")

    });


    /**
     * Should get error when trying to log in
     * (error condition)
     * Integration test
     */
    it('should get error', () => {

        //Get the email field, password and the submit button
        const email: HTMLInputElement = loginComponentHtml.querySelector("#form-login-email-password").querySelector("#email");
        const password: HTMLInputElement = loginComponentHtml.querySelector("#form-login-email-password").querySelector("#password");
        const loginBtn: HTMLButtonElement = loginComponentHtml.querySelector("#form-login-email-password").querySelector("#submit");

        email.value = "lawrance@gmail.com"
        password.value = "123456789"
        email.dispatchEvent(new Event('input'))
        password.dispatchEvent(new Event('input'))
        loginBtn.dispatchEvent(new Event('button'))
        fixtureLogin.detectChanges();

        //Click on log in
        loginBtn.click();

        //Check if there is a  POST request has been sent
        const req = httpMock.expectOne("http://localhost:8080/authenticate/login")
        expect(req.request.method).toBe("POST")

        //Return an error as response
        req.flush({message: "The email/password are not correct"}, {status: 400, statusText: ''})

        fixtureLogin.detectChanges();
        //Check if the message has been displayed to the user
        let errorMessageElement = document.getElementById("error-login")
        expect(errorMessageElement.innerHTML).toEqual("The email/password are not correct")
    });

});
