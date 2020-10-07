import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "./components/mainpage/register/register.component";
import {LoginComponent} from "./components/mainpage/login/login.component";
import {HomeComponent} from "./components/mainpage/home/home.component";
import {NavBarComponent} from "./components/mainpage/nav-bar/nav-bar.component";

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"register", component: RegisterComponent},
  {path:"login", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
