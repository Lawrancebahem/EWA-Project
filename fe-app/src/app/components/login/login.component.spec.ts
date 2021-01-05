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


fdescribe('LoginComponent', () => {
    let loginComponent: LoginComponent;
    let componentHtml: HTMLElement;
    let fixture: ComponentFixture<LoginComponent>;
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
        fixture = TestBed.createComponent(LoginComponent);
        loginComponent = fixture.componentInstance;
        componentHtml = fixture.debugElement.nativeElement;
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(loginComponent).toBeTruthy();
    });


    /**
     * Check the input fields of login page
     */
    it('login input should update component property', () => {
        const email: HTMLInputElement = componentHtml.querySelector("#form-login-email-password").querySelector("#email");
        const password: HTMLInputElement = componentHtml.querySelector("#form-login-email-password").querySelector("#password");

        email.value = "lawrance@gmail.com"
        password.value = "admin"
        email.dispatchEvent(new Event('input'))
        password.dispatchEvent(new Event('input'))

        fixture.detectChanges(); //angular should be updated

        expect(loginComponent.loginForm.get('email').value === email.value).toBeTrue()
        expect(loginComponent.loginForm.get('password').value === password.value).toBeTrue();
        //
        // fixture.whenStable().then(() => {
        // });
    });

    /**
     * Test loggin in
     */
    it('login button should react and authentication method should be called', async (done: DoneFn) => {
        const email: HTMLInputElement = componentHtml.querySelector("#form-login-email-password").querySelector("#email");
        const password: HTMLInputElement = componentHtml.querySelector("#form-login-email-password").querySelector("#password");
        const loginBtn: HTMLButtonElement = componentHtml.querySelector("#form-login-email-password").querySelector("#submit");

        email.value = "lawrance@gmail.com"
        password.value = "admin"
        email.dispatchEvent(new Event('input'))
        password.dispatchEvent(new Event('input'))


        fixture.detectChanges(); //should update
        const authenticationService = fixture.debugElement.injector.get(AuthenticationService);
        const user: User = new User(0, 'Lawrance', "Bahem", new Date(), Gender.MAN, "", "lawrance@gmail.com", "admin", [], true, false);

        let spy = spyOn(authenticationService, 'login').and.returnValue(of(user));

        loginBtn.click();

        fixture.detectChanges();

        // check if the button has been clicked
        spy.calls.mostRecent().returnValue.subscribe((response) => {
            fixture.detectChanges();
            expect(response != null).toBeTrue();
            done();
        });
    });


    it('should log in', () => {

        const email: HTMLInputElement = componentHtml.querySelector("#form-login-email-password").querySelector("#email");
        const password: HTMLInputElement = componentHtml.querySelector("#form-login-email-password").querySelector("#password");
        const loginBtn: HTMLButtonElement = componentHtml.querySelector("#form-login-email-password").querySelector("#submit");

        email.value = "lawrance@gmail.com"
        password.value = "admin"
        email.dispatchEvent(new Event('input'))
        password.dispatchEvent(new Event('input'))
        loginBtn.dispatchEvent(new Event('button'))
        fixture.detectChanges();

        const user: User = new User(0, 'Lawrance', "Bahem", new Date(), Gender.MAN, "", "lawrance@gmail.com", "admin", [], true, false);

        loginBtn.click();

        const req = httpMock.expectOne("http://localhost:8080/authenticate/login")
        expect(req.request.method).toBe("POST")
        req.flush(user);

        fixture.detectChanges();

        expect(loginComponent.authenticationService.loggedInUser.firstName === "lawrance")
        expect(loginComponent.authenticationService.loggedInUser.email === "lawrance@gmail.com")

    });


    it('should get error', () => {

        const email: HTMLInputElement = componentHtml.querySelector("#form-login-email-password").querySelector("#email");
        const password: HTMLInputElement = componentHtml.querySelector("#form-login-email-password").querySelector("#password");
        const loginBtn: HTMLButtonElement = componentHtml.querySelector("#form-login-email-password").querySelector("#submit");

        email.value = "lawrance@gmail.com"
        password.value = "123456789"
        email.dispatchEvent(new Event('input'))
        password.dispatchEvent(new Event('input'))
        loginBtn.dispatchEvent(new Event('button'))
        fixture.detectChanges();

        loginBtn.click();

        const req = httpMock.expectOne("http://localhost:8080/authenticate/login")
        expect(req.request.method).toBe("POST")

        req.flush({message: "The email/password are not correct"}, {status: 400, statusText: ''})

        fixture.detectChanges();

        let errorMessageElement = document.getElementById("error-login")
        expect(errorMessageElement.innerHTML).toEqual("The email/password are not correct")
    });

});
