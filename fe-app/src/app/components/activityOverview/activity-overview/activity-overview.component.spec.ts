import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ActivityOverviewComponent} from './activity-overview.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AuthenticationService} from "../../../services/authenticationService/authentication.service";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {Activity} from "../../../models/activity";
import {Category} from "../../../models/category";
import {RegisterComponent} from "../../register/register.component";
import {AdminService} from "../../../services/admin-service/admin.service";
import {query} from "@angular/animations";
import {By} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {CategoriesHomePageComponent} from "../../HomePage/categories-home-page/categories-home-page.component";


fdescribe('ActivityOverviewComponent', () => {
    let component: ActivityOverviewComponent;
    let fixture: ComponentFixture<ActivityOverviewComponent>;
    let adminService: AdminService;
    let componentHtml: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ActivityOverviewComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterModule.forRoot([]), Ng2SearchPipeModule],

        })
            .compileComponents();
        adminService = TestBed.inject(AdminService);

    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ActivityOverviewComponent);
        component = fixture.componentInstance;
        componentHtml = fixture.debugElement.nativeElement;
        fixture.detectChanges();

        let activity1 = new Activity();
        activity1.id = 1001;
        activity1.title = "testActivityTitle";
        activity1.description = "testActivityDescription";
        activity1.image = "";
        activity1.location = "overal";
        activity1.show = true;

        let activity2 = new Activity();
        activity2.id = 1002;
        activity2.title = "secondActivity";
        activity2.description = "secondActivity";
        activity2.image = "";
        activity2.location = "overal";
        activity2.show = true;

        let category = new Category();
        category.idCategory = 1
        category.image = ""
        category.name = "testCategoryName"
        category.description = "testCategoryDescription"

        component.categoryArray.push(category)
        component.activitiesWithCategories.push(activity1, activity2);
        component.filteredActivityArray = component.activitiesWithCategories
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should find the right activity by searching in the searchbar', () => {

        const searchBar: HTMLInputElement = componentHtml.querySelector("#searchInput");
        let activityArray = componentHtml.querySelector(".activityFoundOverviewTest").querySelectorAll(".card")

        expect(activityArray.length == 2).toBeTrue();

        searchBar.value = "test";
        searchBar.dispatchEvent(new Event('input'));
        fixture.detectChanges()

        expect(component.activitySearchText).toEqual(searchBar.value)

        activityArray = componentHtml.querySelector(".activityFoundOverviewTest").querySelectorAll(".card")
        expect(activityArray.length == 1).toBeTrue();

    });

    it('should filter by clicking category', () => {
        let fixture = TestBed.createComponent(ActivityOverviewComponent);
        let compiled = fixture.debugElement.nativeElement;
        let activityArray = componentHtml.querySelectorAll(".card")
        fixture.detectChanges();

        expect(activityArray.length == 2).toBeTrue()

        let categoryToSelect = compiled.querySelector("#testCategoryName");
        categoryToSelect.click();
        fixture.detectChanges();

        expect(compiled.querySelector("#testCategoryName")).toBeTrue();
        expect(activityArray.length == 0).toBeTrue()
    })


});
