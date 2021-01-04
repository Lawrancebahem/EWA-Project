import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RegisterComponent} from './register.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {UserService} from "../../services/userService/user.service";
import {Router, RouterModule} from "@angular/router";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";


fdescribe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;


    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterModule.forRoot([]),],
            providers: [UserService, RouterTestingModule],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA],
            declarations: [RegisterComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have form', () => {
        let fixture = TestBed.createComponent(RegisterComponent);
        let compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();

        expect(compiled.querySelector('form')).toBeDefined();
    });

    /**
     * This is how to inject the service in the test
     */
    // it('should have service', () => {
    //   let fixture = TestBed.createComponent(RegisterComponent);
    //   let registerComponent = fixture.debugElement.nativeElement;
    //   //Injecting the service
    //   // let service = fixture.debugElement.injector.get("Here we put the service that we want to inejct")
    //
    //   //For example we test the object of registerComponent if it has the same value as in the service
    //   // expect(service.user.name).toEqual(registerComponent.user.name);
    //   //Dont forget to detectChanges for updating
    //   // fixture.detectChanges();
    //
    //   expect(registerComponent.querySelector('form'))
    // });

    /**
     * Check the length of the input fields
     */
    it('Check input fields length should be 10', () => {
        let fixture = TestBed.createComponent(RegisterComponent);
        let compiled = fixture.debugElement.nativeElement;
        let inputFields = Array.from(compiled.querySelector('#input-fields-user-information').querySelectorAll('input')).map(() => {

        })
        fixture.detectChanges();
        expect(inputFields.length === 10).toBeTrue();

    });

    /**
     * Check the length of the interests labels s
     */
    it('Should have 9 labels for interests', () => {
        let fixture = TestBed.createComponent(RegisterComponent);
        let compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();

        const labels = Array.from(compiled.querySelector('#pictures-section').querySelectorAll('label'));
        expect(labels.length === 9).toBeTrue();
    });

    /**
     * Check interests ons they're clicked
     */
    it('Check clicked interests', () => {
        let fixture = TestBed.createComponent(RegisterComponent);
        let compiled = fixture.debugElement.nativeElement;
        fixture.detectChanges();
        let strand = compiled.querySelector('#strand')
        let winterSport = compiled.querySelector('#wintersport')
        winterSport.click();
        strand.click();
        fixture.detectChanges();
        expect(compiled.querySelector('#strand').checked).toBeTrue()
        expect(compiled.querySelector('#wintersport').checked).toBeTrue()
    });
});
