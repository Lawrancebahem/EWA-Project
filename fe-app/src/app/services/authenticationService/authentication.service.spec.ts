import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { AuthenticationService } from './authentication.service';

fdescribe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })
    service = TestBed.inject(AuthenticationService);
    httpMock = TestBed.inject(HttpTestingController);
  });


  afterEach(() => {
    httpMock.verify();
  })

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });


  /**
   * Mocking the login and flushing dummy user
   */
  it('should log in', () => {
    const user = {
      "email": "lawrance@gmail.com",
      "firstName": "Lawrance",
      "lastName": "Bahem",
      "admin": true
    }

    const loginInfo = {email: "lawrance@gmail.com", password: "admin"};
    service.login(loginInfo).subscribe((res) => {
      expect(res.body.email).toEqual(loginInfo.email);
      expect(res.body.firstName).toEqual("Lawrance");
      console.log(res.body);
    })

    const req = httpMock.expectOne("http://localhost:8080/authenticate/login")
    expect(req.request.method).toBe("POST")

    req.flush(user);

  });

});
