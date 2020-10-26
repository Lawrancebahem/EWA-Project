import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/mainpage/header/header.component';
import {NavBarComponent} from './components/mainpage/nav-bar/nav-bar.component';
import {BannerComponent} from './components/HomePage/bannerHomePage/banner.component';
import {ZoekbalkHomePageComponent} from './components/HomePage/search-home-page/zoekbalk-home-page.component';
import {ActivitiesHomePageComponent} from './components/HomePage/activities-home-page/activities-home-page.component';
import {RegisterComponent} from "./components/mainpage/register/register.component";
import {LoginComponent} from "./components/mainpage/login/login.component";
import {CategorypageComponent} from "./components/categorypage/categorypage/categorypage.component";
import { ActivitywandelenComponent } from './components/activitypages/activitywandelen/activitywandelen.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatIconModule} from "@angular/material/icon";
import {SpeechServiceService} from "./components/speech-voice-service/speech-service.service";
import { ActivityOverviewComponent } from './components/activityOverview/activity-overview/activity-overview.component';
import { ProfileComponent } from './components/profile/profile.component';
import {FormsModule} from "@angular/forms";
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavBarComponent,
        BannerComponent,
        ZoekbalkHomePageComponent,
        ActivitiesHomePageComponent,
        RegisterComponent,
        LoginComponent,
        CategorypageComponent,
        ActivitywandelenComponent,
        ActivityOverviewComponent,
        ProfileComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatIconModule,
        FormsModule,
        Ng2SearchPipeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
