import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoekbalkHomePageComponent } from './zoekbalk-home-page.component';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CategoryService} from "../../../services/categoryService/category.service";
import {By} from "@angular/platform-browser";

describe('ZoekbalkHomePageComponent', () => {
  let component: ZoekbalkHomePageComponent;
  let fixture: ComponentFixture<ZoekbalkHomePageComponent>;
  let componentHtml: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoekbalkHomePageComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],

      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoekbalkHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });




});
