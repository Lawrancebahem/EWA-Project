import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitywandelenComponent } from './activitywandelen.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('ActivitywandelenComponent', () => {
  let component: ActivitywandelenComponent;
  let fixture: ComponentFixture<ActivitywandelenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitywandelenComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitywandelenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
