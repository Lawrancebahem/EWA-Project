import {TestBed} from '@angular/core/testing';

import {CategoryService} from './category.service';
import {ActivityService} from "../activityService/activity.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {AuthenticationService} from "../authenticationService/authentication.service";
import {Category} from "../../models/category";
import {AdminService} from "../admin-service/admin.service";

describe('CategoryService', () => {
    let categoryService: CategoryService;
    let adminService: AdminService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CategoryService],

        });
        categoryService = TestBed.inject(CategoryService);
        adminService = TestBed.inject(AdminService);
        httpMock = TestBed.inject(HttpTestingController)


        let category = new Category();
        category.idCategory = 1111;
        category.name = "editCategoryTestCorona";
        category.image = "";
        category.description = "Testing category edit";

        let category1 = new Category();
        category1.idCategory = 11112;
        category1.name = "test thuis";
        category1.image = "";
        category1.description = "Testing category";

        adminService.categoryArray.push(category);
        adminService.categoryArray.push(category1);

    });


    afterEach(() => {
        httpMock.verify();
    })

    it('should be created', () => {
        expect(categoryService).toBeTruthy();
    });


    it("Should get all categories", () => {

        categoryService.getAllCategories().subscribe((response) => {
            console.log(response);
            expect(response.length === 2).toBeTrue();
        }, error => {
            console.log(error);
        })
        const req = httpMock.expectOne("http://localhost:8080/category/all");

        //Check the request method
        expect(req.request.method).toBe("GET")

        req.flush(adminService.categoryArray);

    })

    it("Should delete a category", () => {

        adminService.deleteAnCategory(1111).subscribe((response) => {
            expect(Boolean(response)).toBeTrue();
            console.log(response);
        }, error => {
            console.log(error);
        })
        const req = httpMock.expectOne("http://localhost:8080/category/delete/" + 1111);

        let sentId = Number(req.request.url.match(/\/(\d+)+[\/]?/)[1]);
        //Check the request method
        expect(req.request.method).toBe("GET")

        let foundCategory = adminService.categoryArray.find(category => category.idCategory == sentId);
        let index = adminService.categoryArray.indexOf(foundCategory);
        adminService.categoryArray.splice(index, 1);
        let isAllowedToDelete = adminService.categoryArray.length == 1;
        req.flush(JSON.stringify(isAllowedToDelete));

    })





});
