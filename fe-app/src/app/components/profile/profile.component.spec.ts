// import { ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { ProfileComponent } from './profile.component';
// import {HttpClientTestingModule} from "@angular/common/http/testing";
// import {UserService} from "../../services/userService/user.service";
// import {RouterModule} from "@angular/router";
// import {HttpClient} from "@angular/common/http";
// import {AuthenticationService} from "../../services/authenticationService/authentication.service";
// import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
// import {FormsModule} from "@angular/forms";
// import {User} from "../../models/user";
// import {Gender} from "../../models/gender";
// import {of} from "rxjs";
// import {LoginComponent} from "../login/login.component";
//
// describe('ProfileComponent', () => {
//   let component: ProfileComponent;
//   let fixture: ComponentFixture<ProfileComponent>;
//   let loginComponent: LoginComponent;
//   let componentHtml: HTMLElement;
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ProfileComponent, LoginComponent],
//       providers: [UserService, AuthenticationService],
//       schemas: [ CUSTOM_ELEMENTS_SCHEMA],
//       imports: [HttpClientTestingModule, RouterModule.forRoot([]),FormsModule],
//     })
//     .compileComponents();
//   });
//
//   beforeEach(async (done:DoneFn) => {
//     fixture = TestBed.createComponent(ProfileComponent);
//     component = fixture.componentInstance;
//     const authenticationService = fixture.debugElement.injector.get(AuthenticationService);
//     const loginIngo = {email:"lawrance@gmail.com", password:"admin"};
//     authenticationService.login(loginIngo).subscribe((response)=>{
//       console.log(response);
//       done();
//     },error => {
//       console.log(error);
//     });
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//
//     expect(component).toBeTruthy();
//   });
// });
