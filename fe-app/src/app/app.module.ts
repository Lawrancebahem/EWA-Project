import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {BannerComponent} from './components/HomePage/bannerHomePage/banner.component';
import {ZoekbalkHomePageComponent} from './components/HomePage/search-home-page/zoekbalk-home-page.component';
import {CategoriesHomePageComponent} from './components/HomePage/categories-home-page/categories-home-page.component';
import {LoginComponent} from "./components/login/login.component";
import {CategorypageComponent} from "./components/categorypage/categorypage/categorypage.component";
import {ActivitywandelenComponent} from './components/activitypages/activitywandelen/activitywandelen.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from 'ng2-search-filter';

import {AuthInterceptorService} from "./services/auth-interceptor/auth-interceptor.service";
import {ActivityOverviewComponent} from "./components/activityOverview/activity-overview/activity-overview.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AboutUsPageComponent} from "./components/about-us-page/about-us-page.component";
import {CustomDatePipe} from "./components/customDate/customDatePipe";
import {MatchingPageComponent} from "./components/matching-page/matching-page.component";
import {MyActivitiesComponent} from "./components/my-activities/my-activities.component";
import {ActivityDetailsComponent} from "./components/activitypages/activity-details/activity-details.component";
import {AdminComponent} from "./components/admin/admin.component";
import {RegisterComponent} from "./components/register/register.component";
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ActivityEditComponent } from './components/admin/activity-admin/activitiy-edit/activity-edit.component';
import { CategoryEditComponent } from './components/admin/category-admin/category-edit/category-edit.component';
import { UserOverviewComponent } from './components/admin/user-admin/user-overview/user-overview.component';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        BannerComponent,
        ZoekbalkHomePageComponent,
        CategoriesHomePageComponent,
        RegisterComponent,
        LoginComponent,
        CategorypageComponent,
        ActivitywandelenComponent,
        ActivityOverviewComponent,
        ProfileComponent,
        AboutUsPageComponent,
        CustomDatePipe,
        MatchingPageComponent,
        MyActivitiesComponent,
        ActivityDetailsComponent,
        AdminComponent,
        ContactUsComponent,
        ActivityEditComponent,
        CategoryEditComponent,
        UserOverviewComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        FormsModule,
        Ng2SearchPipeModule,
        ReactiveFormsModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        }

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
