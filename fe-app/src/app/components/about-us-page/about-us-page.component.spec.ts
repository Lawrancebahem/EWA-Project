import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsPageComponent } from './about-us-page.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('AboutUsPageComponent', () => {
  let component: AboutUsPageComponent;
  let fixture: ComponentFixture<AboutUsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsPageComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
