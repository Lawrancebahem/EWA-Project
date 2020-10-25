import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "./components/mainpage/register/register.component";
import {LoginComponent} from "./components/mainpage/login/login.component";
import {ActivitywandelenComponent} from "./components/activitypages/activitywandelen/activitywandelen.component";
import {CategorypageComponent} from "./components/categorypage/categorypage/categorypage.component";
import {ActivitiesHomePageComponent} from "./components/HomePage/activities-home-page/activities-home-page.component";
import {ProfileComponent} from "./components/profile/profile.component";

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: ActivitiesHomePageComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'activities', component:ActivitywandelenComponent},
  {path:'category', component:CategorypageComponent},
  {path:'profile', component:ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
