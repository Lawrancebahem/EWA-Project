import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from "./components/mainpage/register/register.component";
import {LoginComponent} from "./components/mainpage/login/login.component";
import {ActivitywandelenComponent} from "./components/activitypages/activitywandelen/activitywandelen.component";
import {CategorypageComponent} from "./components/categorypage/categorypage/categorypage.component";
import {ActivitiesHomePageComponent} from "./components/HomePage/activities-home-page/activities-home-page.component";
import {ActivityOverviewComponent} from "./components/activityOverview/activity-overview/activity-overview.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AboutUsPageComponent} from "./components/about-us-page/about-us-page.component";
import {MatchingPageComponent} from "./components/matching-page/matching-page.component";
import {MyActivitiesComponent} from "./components/my-activities/my-activities.component";
import {ActivityDetailsComponent} from "./components/activitypages/activity-details/activity-details.component";

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: ActivitiesHomePageComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'activities', component: ActivitywandelenComponent},
    {path: 'category', component: CategorypageComponent},
    {path: 'activityOverview',component: ActivityOverviewComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'aboutUs', component: AboutUsPageComponent},
    {path: 'matching', component: MatchingPageComponent},
    {path: 'myAcitivities', component: MyActivitiesComponent},
    {path: 'activityDetails', children:[
            {path: ':id', component: ActivityDetailsComponent}
        ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
