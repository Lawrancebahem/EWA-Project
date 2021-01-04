import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesHomePageComponent } from './categories-home-page.component';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {RouterModule} from "@angular/router";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdminService} from "../../../services/admin-service/admin.service";
import {Category} from "../../../models/category";
import {Ng2SearchPipeModule} from "ng2-search-filter";

describe('ActivitiesHomePageComponent', () => {
  let component: CategoriesHomePageComponent;
  let fixture: ComponentFixture<CategoriesHomePageComponent>;
  let adminService: AdminService;
  let componentHtml: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesHomePageComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterModule.forRoot([]),Ng2SearchPipeModule],

    })
    .compileComponents();
    adminService = TestBed.inject(AdminService);

  });


  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesHomePageComponent);
    component = fixture.componentInstance;
    componentHtml = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    let category = new Category();
    category.idCategory = 1
    category.image = ""
    category.name = "Corona Lockdown"
    category.description = "Blijf thuis"

    let category2 = new Category();
    category2.idCategory = 2
    category2.image = ""
    category2.name = "Home alone"
    category2.description = "Blijf thuis"

    adminService.categoryArray.push(category);
    adminService.categoryArray.push(category2);
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to change the text of search bar and find the appropriate category',  () => {

    let searchBarText:HTMLInputElement = componentHtml.querySelector(".searchBarTestComponent").querySelector("#fieldText")
    searchBarText.value = "Corona"
    searchBarText.dispatchEvent(new Event('input'))
    fixture.detectChanges();

    expect(component.searchText).toEqual(searchBarText.value)

    let foundCategoryArrayLength = componentHtml.querySelector("#foundCategoryTest").querySelectorAll(".card")
    expect(foundCategoryArrayLength.length == 1).toBeTrue();

  });


  it('should see banner',  () => {
    let fixture = TestBed.createComponent(CategoriesHomePageComponent);
    let compiledHomePageComponent = fixture.debugElement.nativeElement;
    let banner = compiledHomePageComponent.querySelector("#bannerCategoryTest")
    expect(banner != null).toBeTrue()
  });


});
