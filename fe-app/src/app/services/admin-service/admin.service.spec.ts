import {TestBed} from '@angular/core/testing';

import {AdminService} from './admin.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {CategoryService} from "../categoryService/category.service";
import {AuthenticationService} from "../authenticationService/authentication.service";
import {UserService} from "../userService/user.service";
import {ActivityService} from "../activityService/activity.service";
import {Activity} from "../../models/activity";

fdescribe('AdminService', () => {
    let service: AdminService;
    let userService: UserService;
    let activityService: ActivityService;
    let httpMock: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AdminService],

        });
        service = TestBed.inject(AdminService);
        userService = TestBed.inject(UserService);
        activityService = TestBed.inject(ActivityService);
        httpMock = TestBed.inject(HttpTestingController);

    });


    afterEach(() => {
        httpMock.verify();
    })

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get all users', () => {

        const user = {
            "email": "lawrance@gmail.com",
            "firstName": "Lawrance",
            "lastName": "Bahem",
            "admin": true
        }
        const user1 = {
            "email": "MoustafaFadil@gmail.com",
            "firstName": "Moustafa",
            "lastName": "Fadil",
            "admin": true
        }

        let usersArray = [];
        usersArray.push(user);
        usersArray.push(user1);

        userService.findAll().subscribe((response) => {
            expect(response.length == 2).toBeTrue();
        }, error => {
            console.log(error);
        })
        const req = httpMock.expectOne("http://localhost:8080/user/all")

        expect(req.request.method).toBe("GET")

        req.flush(usersArray);
    })



    it('should get all activities', () => {

        const activity: { image: string; show: boolean; location: string; id: number; title: string } = {
            "id": 1,
            "title": "Maak mondkapjes",
            "image": "",
            "location": "Amsterdam",
            "show": true
        }
        const activity1: { image: string; show: boolean; location: string; id: number; title: string } = {
            "id": 2,
            "title": "Maak kennis met de buurt",
            "image": "",
            "location": "Haarlem",
            "show": true
        }

        let activityArray = [];
        activityArray.push(activity);
        activityArray.push(activity1);

        activityService.findById(1).subscribe((response) => {
            expect(response.id === 1).toBeTrue();
            expect(response.title === "Maak mondkapjes").toBeTrue();
            console.log(response);
        }, error => {
            console.log(error);
        })
        const req = httpMock.expectOne("http://localhost:8080/activity/1")

        //Get the id from the url
        let mockId = req.request.url.match(/\/(\d+)+[\/]?/)[1]
        //Check the request method
        expect(req.request.method).toBe("GET")

        let foundActivityById = activityArray.find((activity) => activity.id == mockId);
        req.flush(foundActivityById);
    })

});
