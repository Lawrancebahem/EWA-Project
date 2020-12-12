import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {AdminComponent} from "./components/admin/admin.component";
import {CategoriesHomePageComponent} from "./components/HomePage/categories-home-page/categories-home-page.component";
import {ActivitywandelenComponent} from "./components/activitypages/activitywandelen/activitywandelen.component";
import {CategorypageComponent} from "./components/categorypage/categorypage/categorypage.component";
import {ActivityOverviewComponent} from "./components/activityOverview/activity-overview/activity-overview.component";
import {AboutUsPageComponent} from "./components/about-us-page/about-us-page.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {MatchingPageComponent} from "./components/matching-page/matching-page.component";
import {MyActivitiesComponent} from "./components/my-activities/my-activities.component";
import {ActivityDetailsComponent} from "./components/activitypages/activity-details/activity-details.component";
import {ContactUsComponent} from "./components/contact-us/contact-us.component";
import {ActivityEditComponent} from "./components/admin/activity-admin/activitiy-edit/activity-edit.component";
import {UserOverviewComponent} from "./components/admin/user-admin/user-overview/user-overview.component";
import {CategoryEditComponent} from "./components/admin/category-admin/category-edit/category-edit.component";

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: CategoriesHomePageComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'activities', component: ActivitywandelenComponent},
    {path: 'category', children: [
            { path: ':id', component: CategorypageComponent}
        ]},
    {path: 'activityOverview',component: ActivityOverviewComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'aboutUs', component: AboutUsPageComponent},
    {path: 'matching', component: MatchingPageComponent},
    {path: 'myActivities', component: MyActivitiesComponent},
    {path: 'admin', component: AdminComponent,
     children:[
         {path: 'activity-edit', component: ActivityEditComponent,
         children:[{path:":id", component:ActivityEditComponent}]},

         {path: 'user-edit', component: UserOverviewComponent},
         {path: 'category-edit', component: CategoryEditComponent}
     ]},
    {path: 'activityDetails', children:[
            {path: ':id', component: ActivityDetailsComponent}
        ]},
  {path: 'contactUs', component: ContactUsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
