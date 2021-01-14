import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {blankUser, RegisterComponent} from './register.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {UserService} from "../../services/userService/user.service";
import {Router, RouterModule} from "@angular/router";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {first} from "rxjs/operators";


fdescribe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;


    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterModule.forRoot([]),],
            providers: [UserService, RouterTestingModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [RegisterComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    fit('should create', () => {
        expect(component).toBeTruthy();
    });

    /**
     *      * @author Lawrance Bahem
     */
    fit('should have form', () => {
        let fixture = TestBed.createComponent(RegisterComponent);
        let compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();

        //Check if there is a form
        expect(compiled.querySelector('form')).toBeDefined();
    });


    /**
     * Check the length of the input fields
     * unit
     * @author Lawrance Bahem
     */
    fit('Check input fields length should be 10', () => {
        let fixture = TestBed.createComponent(RegisterComponent);
        let compiled = fixture.debugElement.nativeElement;

        //Get the all input fields
        let inputFields = Array.from(compiled.querySelector('#input-fields-user-information').querySelectorAll('input'));
        fixture.detectChanges();

        //Check the total of the input fields
        expect(inputFields.length === 10).toBeTrue();

    });

    /**
     * Check the length of the interests labels s
     * unit
     @author Lawrance Bahem
     */
    fit('Should have 9 labels for interests', () => {
        let fixture = TestBed.createComponent(RegisterComponent);
        let compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();

        //Get all interests and check the size of the returned array
        const labels = compiled.querySelector('#pictures-section').querySelectorAll('label');
        expect(labels.length === 9).toBeTrue();
    });

    /**
     * Check interests ons they're clicked
     * unit
     * @author Lawrance Bahem
     */
    fit('Check clicked interests', () => {
        let fixture = TestBed.createComponent(RegisterComponent);
        let compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();

        //Find input
        let strand = compiled.querySelector('#strand')
        let winterSport = compiled.querySelector('#wintersport')
        //Click on the both iputs
        winterSport.click();
        strand.click();
        fixture.detectChanges();
        //Check if the interests have been checked
        expect(compiled.querySelector('#strand').checked).toBeTrue()
        expect(compiled.querySelector('#wintersport').checked).toBeTrue()
    });


    /**
     * @Author Moustafa
     */
    it('should test input validity', () => {
        const firstName = component.registerForm.controls.firstName;
        const lastName = component.registerForm.controls.lastName;
        const email = component.registerForm.controls.email;
        // const password = loginComponent.registerForm.controls.lastName;

        expect(firstName.valid).toBeFalsy();
        expect(lastName.valid).toBeFalsy();
        expect(email.valid).toBeFalsy();

        firstName.setValue('Moustafa');
        lastName.setValue('Fadil');
        email.setValue('moustafa.fadil@hva.nl');
        expect(firstName.valid).toBeTruthy();
        expect(lastName.valid).toBeTruthy();
        expect(email.valid).toBeTruthy();
    })

    /**
     * @Author Moustafa Fadil
     */
    it('created a form with username and password input and login button', () => {
        // const fixture = TestBed.createComponent(LoginComponent);
        const firstName = fixture.debugElement.nativeElement.querySelector('#input-fields-user-information').querySelector('#surname');
        const lastName = fixture.debugElement.nativeElement.querySelector('#input-fields-user-information').querySelector('#lastname');
        const email = fixture.debugElement.nativeElement.querySelector('#input-fields-user-information').querySelector('#email');
        const password = fixture.debugElement.nativeElement.querySelector('#input-fields-user-information').querySelector('#password1');
        expect(firstName).toBeDefined();
        expect(lastName).toBeDefined();
        expect(email).toBeDefined();
        expect(password).toBeDefined();
    });

    function updateForm(userEmail, userPassword) {
        fixture.componentInstance.registerForm.controls['email'].setValue(userEmail);
        fixture.componentInstance.registerForm.controls['password'].setValue(userPassword);
    }

    it('Display Both email & Password Error Msg when both field is blank', () => {

        updateForm(blankUser.email, blankUser.password);
        fixture.detectChanges();

        const button = fixture.debugElement.nativeElement.querySelector('#submit');
        button.click();
        fixture.detectChanges();

        const usernameErrorMsg = fixture.debugElement.nativeElement.querySelector('#email-error-msg');
        const passwordErrorMsg = fixture.debugElement.nativeElement.querySelector('#password-error-msg');

        expect(usernameErrorMsg).toBeDefined();
        expect(usernameErrorMsg.innerHTML).toContain('Email is een verplicht veld');

        expect(passwordErrorMsg).toBeDefined();
        expect(passwordErrorMsg.innerHTML).toContain('Wachtwoord is een verplicht veld');
    });

});
