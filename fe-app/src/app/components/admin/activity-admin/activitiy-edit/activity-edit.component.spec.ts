import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityEditComponent } from './activity-edit.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {UserService} from "../../../../services/userService/user.service";
import {AdminService} from "../../../../services/admin-service/admin.service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('ActivitiyEditComponent', () => {
  let component: ActivityEditComponent;
  let fixture: ComponentFixture<ActivityEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityEditComponent ],
      imports: [HttpClientTestingModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],

      providers: [AdminService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
