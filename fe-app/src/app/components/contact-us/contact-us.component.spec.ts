import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsComponent } from './contact-us.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
