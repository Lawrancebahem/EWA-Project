import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesHomePageComponent } from './categories-home-page.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterModule} from "@angular/router";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('ActivitiesHomePageComponent', () => {
  let component: CategoriesHomePageComponent;
  let fixture: ComponentFixture<CategoriesHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesHomePageComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],

      imports: [HttpClientTestingModule, RouterModule.forRoot([])],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
