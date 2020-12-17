import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorypageComponent } from './categorypage.component';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('CategorypageComponent', () => {
  let component: CategorypageComponent;
  let fixture: ComponentFixture<CategorypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorypageComponent ],
      imports: [ FormsModule, HttpClientTestingModule, RouterModule.forRoot([]),],

      schemas: [ CUSTOM_ELEMENTS_SCHEMA],


    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
