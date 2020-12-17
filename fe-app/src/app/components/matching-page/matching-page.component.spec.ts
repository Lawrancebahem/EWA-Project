import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchingPageComponent } from './matching-page.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {UserService} from "../../services/userService/user.service";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('MatchingPageComponent', () => {
  let component: MatchingPageComponent;
  let fixture: ComponentFixture<MatchingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchingPageComponent ],
      imports: [HttpClientTestingModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],
      providers: [UserService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
