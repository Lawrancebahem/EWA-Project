import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyActivitiesComponent } from './my-activities.component';
import {UserService} from "../../services/userService/user.service";

describe('MyActivitiesComponent', () => {
  let component: MyActivitiesComponent;
  let fixture: ComponentFixture<MyActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyActivitiesComponent ],
      providers:[UserService],
      imports:[]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
