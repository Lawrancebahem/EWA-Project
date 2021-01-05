import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorypageComponent } from './categorypage.component';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdminService} from "../../../services/admin-service/admin.service";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {ActivityOverviewComponent} from "../../activityOverview/activity-overview/activity-overview.component";
import {Activity} from "../../../models/activity";
import {Category} from "../../../models/category";

describe('CategorypageComponent', () => {
  let component: CategorypageComponent;
  let fixture: ComponentFixture<CategorypageComponent>;
  let adminService: AdminService;
  let componentHtml: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategorypageComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterModule.forRoot([]), Ng2SearchPipeModule],

    })
        .compileComponents();
    adminService = TestBed.inject(AdminService);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorypageComponent);
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

    component.categoryObject = category
    component.activityArray.push(activity1, activity2);
    adminService.categoryArray.push(category)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search find the right activity with the searchbar',  () => {

    let shownActivities = componentHtml.querySelector("#activityOverviewTest").querySelectorAll(".card")
    let searchBarText:HTMLInputElement = componentHtml.querySelector(".search-div").querySelector("#categoryPageSearchBar")

    fixture.detectChanges()
    console.log(shownActivities.length)
    expect(shownActivities.length == 2).toBeTrue()

    searchBarText.value = "test"
    searchBarText.dispatchEvent(new Event('input'))
    fixture.detectChanges();
    expect(component.searchText).toEqual(searchBarText.value)

    shownActivities = componentHtml.querySelector(".activity-overview").querySelectorAll(".card")
    expect(shownActivities.length == 1).toBeTrue();

  });
});
