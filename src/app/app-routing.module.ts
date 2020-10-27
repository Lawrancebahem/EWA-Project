import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "./components/mainpage/register/register.component";
import {LoginComponent} from "./components/mainpage/login/login.component";
import {ActivitywandelenComponent} from "./components/activitypages/activitywandelen/activitywandelen.component";
import {CategorypageComponent} from "./components/categorypage/categorypage/categorypage.component";
import {ActivitiesHomePageComponent} from "./components/HomePage/activities-home-page/activities-home-page.component";
import {ActivityOverviewComponent} from "./components/activityOverview/activity-overview/activity-overview.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AboutUsPageComponent} from "./components/about-us-page/about-us-page.component";

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: ActivitiesHomePageComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'activities', component:ActivitywandelenComponent},
  {path:'category', component:CategorypageComponent},
  {path:'activityoverview', component:ActivityOverviewComponent},
  {path:'profile', component:ProfileComponent},
  {path:'aboutUs', component:AboutUsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
