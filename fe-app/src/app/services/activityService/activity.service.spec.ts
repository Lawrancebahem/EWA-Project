import { TestBed } from '@angular/core/testing';

import { ActivityService } from './activity.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {UserService} from "../userService/user.service";

describe('ActivityServiceService', () => {
  let service: ActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ActivityService]
    });
    service = TestBed.inject(ActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
