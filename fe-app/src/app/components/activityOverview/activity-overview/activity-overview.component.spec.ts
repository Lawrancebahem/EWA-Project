import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityOverviewComponent } from './activity-overview.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {AuthenticationService} from "../../../services/authenticationService/authentication.service";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('ActivityOverviewComponent', () => {
  let component: ActivityOverviewComponent;
  let fixture: ComponentFixture<ActivityOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
      declarations: [ ActivityOverviewComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
