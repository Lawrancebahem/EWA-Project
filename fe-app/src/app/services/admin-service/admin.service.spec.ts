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

    /**
     * Get all users
     *unit tests/more system test
     */
    it('should get all users', () => {

        //create two users
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


        //Add them to the array
        let usersArray = [];
        usersArray.push(user);
        usersArray.push(user1);

        //Check the response length
        userService.findAll().subscribe((response) => {
            expect(response.length == 2).toBeTrue();
        }, error => {
            console.log(error);
        })
        //Check if there is GET request to this url
        const req = httpMock.expectOne("http://localhost:8080/user/all")

        expect(req.request.method).toBe("GET")

        //Return the users array as response
        req.flush(usersArray);
    })


    /**
     * Get all activities
     * unit tests/more system test
     */
    it('should get all activities', () => {

        //Create two activities
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

        //Add them to the array
        let activityArray = [];
        activityArray.push(activity);
        activityArray.push(activity1);

        //Check the response of the request
        activityService.findById(1).subscribe((response) => {
            expect(response.id === 1).toBeTrue();
            expect(response.title === "Maak mondkapjes").toBeTrue();
            console.log(response);
        }, error => {
            console.log(error);
        })

        //Check if there is a GET request has been sent to this url
        const req = httpMock.expectOne("http://localhost:8080/activity/1")

        //Get the id from the url
        let mockId = req.request.url.match(/\/(\d+)+[\/]?/)[1]
        //Check the request method
        expect(req.request.method).toBe("GET")

        //Return the activity based on its id
        let foundActivityById = activityArray.find((activity) => activity.id == mockId);
        req.flush(foundActivityById);
    })

});
