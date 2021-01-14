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
        /**
         * @Author Moustafa
         */
        it('should test input validity', () => {
            //first i make 3 variables with what i can test the validaty
            const firstName = component.registerForm.controls.firstName;
            const lastName = component.registerForm.controls.lastName;
            const email = component.registerForm.controls.email;

            expect(firstName.valid).toBeFalsy();
            expect(lastName.valid).toBeFalsy();
            expect(email.valid).toBeFalsy();
            //i haven't given the constants a input value yet, that is why i expect the an false
            expect(firstName.valid).toBeFalsy();
            expect(lastName.valid).toBeFalsy();
            expect(email.valid).toBeFalsy();

            //now i give the constants a input value
            firstName.setValue('Moustafa');
            lastName.setValue('Fadil');
            email.setValue('moustafa.fadil@hva.nl');

            //last i expect the constants to be truthy because they have an value now.
            expect(firstName.valid).toBeTruthy();
            expect(lastName.valid).toBeTruthy();
            expect(email.valid).toBeTruthy();
        })

        /**
         * @Author Moustafa Fadil
         */
        it('created a form with firstname, lastname, email and password input and login button', () => {
            //I make 4 contante by retrieving the input values.
            //first i need to get the form id and when i have the correct name
            // i retrieve the right input value by inserting the id of the input form.
            // i did this 4 times
            const firstName = fixture.debugElement.nativeElement.querySelector('#input-fields-user-information').querySelector('#surname');
            const lastName = fixture.debugElement.nativeElement.querySelector('#input-fields-user-information').querySelector('#lastname');
            const email = fixture.debugElement.nativeElement.querySelector('#input-fields-user-information').querySelector('#email');
            const password = fixture.debugElement.nativeElement.querySelector('#input-fields-user-information').querySelector('#password1');

            //last i expect the constants to be defined so they return something
            expect(firstName).toBeDefined();
            expect(lastName).toBeDefined();
            expect(email).toBeDefined();
            expect(password).toBeDefined();
        });

        function updateForm(userEmail, userPassword) {
            //this is for given the form the values by retrieving the email and password.
            //we retrieve this by inserting the variable as a string en set the value of this variable to
            //the variables in the updateForm parameters.
            fixture.componentInstance.registerForm.controls['email'].setValue(userEmail);
            fixture.componentInstance.registerForm.controls['password'].setValue(userPassword);
        }

//we check in this check if the fields are blank and need to show an error if they're blank.
        it('Display Both email & Password Error Msg when both field is blank', () => {


            //first we retrieve the function and insert an empty string to both parameters
            updateForm(blankUser.email, blankUser.password);
            fixture.detectChanges();

            //next step is clicking on the button and check if there are any changes.
            //So first we need to retrieve the button by calling an querySelector and inserting the id of the button.
            const button = fixture.debugElement.nativeElement.querySelector('#submit');
            button.click();// for clicking on the button
            fixture.detectChanges();//check if there are any changes

            //We gave the forms blank strings so we have to show an error.
            //first of all we have to retrieve the errorMessage by Inserting the id of the error message
            // in the parameter of the querySelector
            const usernameErrorMsg = fixture.debugElement.nativeElement.querySelector('#email-error-msg');
            const passwordErrorMsg = fixture.debugElement.nativeElement.querySelector('#password-error-msg');

            //this checks if the variable is not undefined
            // you do this for checken if the variable has a value
            expect(usernameErrorMsg).toBeDefined();
            //We need to check if the message is the same as we expect it to be, by calling the variable html content.
            //that is why we use innerHTML
            expect(usernameErrorMsg.innerHTML).toContain('Email is een verplicht veld');

            //this checks if the variable is not undefined
            // you do this for checken if the variable has a value
            expect(passwordErrorMsg).toBeDefined();
            //We need to check if the message is the same as we expect it to be, by calling the variable html content.
            //that is why we use innerHTML
            expect(passwordErrorMsg.innerHTML).toContain('Wachtwoord is een verplicht veld');
        });
    });

});
