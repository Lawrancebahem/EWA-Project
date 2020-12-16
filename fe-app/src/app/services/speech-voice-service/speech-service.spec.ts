import { TestBed } from '@angular/core/testing';

import { SpeechServiceService } from './speech-service.service';
import {UserService} from "../userService/user.service";
import {Router, RouterModule} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('SpeechServiceService', () => {
  let service: SpeechServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeechServiceService],
      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
    });

    service = TestBed.inject(SpeechServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
