import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "./components/mainpage/register/register.component";
import {LoginComponent} from "./components/mainpage/login/login.component";
import {HomeComponent} from "./components/HomePage/home/home.component";
import {ActivitywandelenComponent} from "./components/activitypages/activitywandelen/activitywandelen.component";
import {CategorypageComponent} from "./components/categorypage/categorypage/categorypage.component";

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'activities', component:ActivitywandelenComponent},
  {path:'category', component:CategorypageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
