import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './user.service';
import {AuthenticationService} from "../authenticationService/authentication.service";

describe('UserService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [UserService]
  }));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
