(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+m7b":
/*!**************************************************************!*\
  !*** ./src/app/components/mainpage/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "zfcM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class LoginComponent {
    constructor(rout, activeRout) {
        this.rout = rout;
        this.activeRout = activeRout;
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 41, vars: 0, consts: [[1, "wrapper"], [1, "grid--half", "p-5"], [1, "text_1"], [1, "login_blok"], [1, "form"], ["id", "h2"], [1, "form--input"], ["id", "email", "name", "gebruikersnaam", "placeholder", "e-mail", "type", "text", 1, "form_input"], [1, "show-password"], ["id", "eye", 1, "fa", "fa-eye"], ["id", "password", "maxlength", "20", "placeholder", "wachtwoord", "type", "password", 1, "form_input"], ["value", "Inloggen", "type", "submit", "id", "submit", 1, "button", "button--primary", "button--form", "uppercase"], ["value", "stuur wachtwoord", "type", "button", "id", "stuur_wachtwoord", "onclick", "", 1, "button", "button--primary", "button--form", "uppercase", 2, "display", "none"], [1, "text-center", "no-padding", "text-white"], ["routerLink", "/register", 1, "form--link"], [1, "form--link", "text-center"], [1, "text-white"], [1, "container"], [1, "container", "container-activity-thumbnails"], [1, "activity-thumbnail--image", 2, "background-image", "url('../../../../assets/Images/Interests/shopping.jpg')"], [1, "activity-thumbnail"], [1, "activity-thumbnail--image", 2, "background-image", "url('../../../../assets/Images/Interests/muziek.jpg')"], [1, "activity-thumbnail--image", 2, "background-image", "url('../../../../assets/Images/Interests/wintersport.jpg')"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Vind leuke activiteiten! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Inloggen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Heeft u nog geen een account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Registreer nu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Ik ben mijn wachtwoord vergeten.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Ontdek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Lees meer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Vind de mooiste activiteiten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".login_blok[_ngcontent-%COMP%]{\n    transition: box-shadow .2s ease;\n    padding: 2rem;\n    background-color: var(--color-default);\n    margin-top: -5rem;\n    border-radius: var(--border-radius);\n    box-shadow: 3px 3px 7px 1px rgba(0,0,0,0.22);\n    color: white;\n}\n.login_blok[_ngcontent-%COMP%]:hover{\n    box-shadow: 3px 3px 7px 1px rgba(0,0,0,0.4);\n}\n.post-thumbnail--image[_ngcontent-%COMP%]{\n    background-position: center;\n    background-size: cover;\n    border-radius: 20px;\n}\n.container-activity-thumbnails[_ngcontent-%COMP%]{\n    grid-template-columns: repeat(3, 1fr);\n    transition: background 0.2s;\n    background: linear-gradient(to top, var(--color-default) 5%, transparent 50%);\n    position: relative;\n    min-height: 200px;\n    padding: 1rem;\n    border-radius: 20px;\n    overflow: hidden;\n}\n.activity-thumbnail--image[_ngcontent-%COMP%] {\n    background-position: center;\n    background-size: cover;\n    border-radius: 20px;\n    height: 100%;\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n.activity-thumbnail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    font-family: 'Open Sans', sans-serif;\n    font-weight: normal;\n    padding: 1rem;\n    bottom: 1rem;\n    left: 1rem;\n    right: 1rem;\n    color: var(--color-white);\n    font-size: 1.4rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2; \n    -webkit-box-orient: vertical;\n}\n.text_1[_ngcontent-%COMP%]{\n    display: block;\n    font-style: var(--font-family-text);\n}\n@media only screen and (max-width: 48em){\n    .login_blok[_ngcontent-%COMP%]{\n        margin:0;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWlucGFnZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhDQUE4QztBQUM5QyxpREFBaUQ7QUFDakQsOENBQThDO0FBRTlDO0lBQ0ksK0JBQStCO0lBQy9CLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBQ2pCLG1DQUFtQztJQUNuQyw0Q0FBNEM7SUFDNUMsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DO0FBR0E7SUFDSSwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLDJCQUEyQjtJQUMzQiw2RUFBNkU7SUFDN0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBaUI7T0FBakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHFCQUFxQixFQUFFLDRCQUE0QjtJQUNuRCw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJO1FBQ0ksUUFBUTtJQUNaO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW5wYWdlL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZS1leHRyYS9mb3JtLmNzc1wiOyovXG4vKkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZS1leHRyYS9idXR0b25zLmNzc1wiOyovXG4vKkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZS1leHRyYS9ncmlkLmNzc1wiOyovXG5cbi5sb2dpbl9ibG9re1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjJzIGVhc2U7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kZWZhdWx0KTtcbiAgICBtYXJnaW4tdG9wOiAtNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDdweCAxcHggcmdiYSgwLDAsMCwwLjIyKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5sb2dpbl9ibG9rOmhvdmVye1xuICAgIGJveC1zaGFkb3c6IDNweCAzcHggN3B4IDFweCByZ2JhKDAsMCwwLDAuNCk7XG59XG5cblxuLnBvc3QtdGh1bWJuYWlsLS1pbWFnZXtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uY29udGFpbmVyLWFjdGl2aXR5LXRodW1ibmFpbHN7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgdmFyKC0tY29sb3ItZGVmYXVsdCkgNSUsIHRyYW5zcGFyZW50IDUwJSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uYWN0aXZpdHktdGh1bWJuYWlsLS1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uYWN0aXZpdHktdGh1bWJuYWlsIGgze1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm90dG9tOiAxcmVtO1xuICAgIGxlZnQ6IDFyZW07XG4gICAgcmlnaHQ6IDFyZW07XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjsgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuLnRleHRfMXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXN0eWxlOiB2YXIoLS1mb250LWZhbWlseS10ZXh0KTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhlbSl7XG4gICAgLmxvZ2luX2Jsb2t7XG4gICAgICAgIG1hcmdpbjowO1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lawrancebahem/IdeaProjects/digital-life-5/fe-app/src/main.ts */"zUnb");


/***/ }),

/***/ "3fzt":
/*!********************************************************************************************!*\
  !*** ./src/app/components/HomePage/activities-home-page/activities-home-page.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ActivitiesHomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitiesHomePageComponent", function() { return ActivitiesHomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _bannerHomePage_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bannerHomePage/banner.component */ "PqAt");
/* harmony import */ var _search_home_page_zoekbalk_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search-home-page/zoekbalk-home-page.component */ "w5cE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class ActivitiesHomePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ActivitiesHomePageComponent.ɵfac = function ActivitiesHomePageComponent_Factory(t) { return new (t || ActivitiesHomePageComponent)(); };
ActivitiesHomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivitiesHomePageComponent, selectors: [["app-activities-home-page"]], decls: 36, vars: 0, consts: [["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "row", "row-cols-1", "row-cols-md-2"], ["routerLink", "/category", 1, "col", "mb-4"], [1, "card"], ["src", "../../../../assets/Images/activityImage/wandeling.jpg", "alt", "wandeling", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "col", "mb-4"], ["src", "../../../../assets/Images/activityImage/fietsen.jpg", "alt", "fietsen", 1, "card-img-top"], ["src", "../../../../assets/Images/activityImage/bowlen.jpg", "alt", "bowlen", 1, "card-img-top"], ["src", "../../../../assets/Images/activityImage/mondkapjes.jpg", "alt", "mondkapje", 1, "card-img-top"]], template: function ActivitiesHomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-zoekbalk-home-page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Herfst");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Wandelen in mooiste natuurgebieden van Nederland,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Fietsen met vriendin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Gezellig fietsen met uw vriendin door de mooiste paden van Nederland met onze begeleiders.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Disco Bowlen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Zin in bowlen? Kom lekker met uw vriendin of familie disco Bowlen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mondkapjes maken");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Geen zin om naar buiten te gaan? Maak thuis leuke mondkapjes voor je zelf of vriendin.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_bannerHomePage_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _search_home_page_zoekbalk_home_page_component__WEBPACK_IMPORTED_MODULE_2__["ZoekbalkHomePageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".row.row-cols-1.row-cols-md-2[_ngcontent-%COMP%] {\n   margin: 1rem;\n}\n.col.mb-4[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n\n\n\n\n\n\n.card[_ngcontent-%COMP%]{\n    border-radius: var(--border-radius);\n    cursor: pointer;\n}\n.card-img-top[_ngcontent-%COMP%]{\n    max-height: 350px;\n    border-radius: var(--border-radius);\n}\n@media screen and (max-width: 1124px) {\n    #carouselExampleSlidesOnly[_ngcontent-%COMP%] {\n        max-height: 340px;\n    }\n}\n@media screen and (max-width: 767px) {\n    .col.mb-4[_ngcontent-%COMP%] {\n        justify-content: center;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9hY3Rpdml0aWVzLWhvbWUtcGFnZS9hY3Rpdml0aWVzLWhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csWUFBWTtBQUNmO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBRUEsVUFBVTtBQUNWLG9CQUFvQjtBQUNwQixzQ0FBc0M7QUFDdEMsSUFBSTtBQUVKLGlDQUFpQztBQUNqQyxxQkFBcUI7QUFDckIsSUFBSTtBQUNKO0lBQ0ksbUNBQW1DO0lBQ25DLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL0hvbWVQYWdlL2FjdGl2aXRpZXMtaG9tZS1wYWdlL2FjdGl2aXRpZXMtaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LnJvdy1jb2xzLTEucm93LWNvbHMtbWQtMiB7XG4gICBtYXJnaW46IDFyZW07XG59XG4uY29sLm1iLTQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi8qLmNhcmQgeyovXG4vKiAgICB3aWR0aDogNTAwcHg7Ki9cbi8qICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsqL1xuLyp9Ki9cblxuLyouY29sLm1iLTQ6bnRoLWNoaWxkKDEpIC5jYXJkIHsqL1xuLyogICAgaGVpZ2h0OiA0MThweDsqL1xuLyp9Ki9cbi5jYXJke1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXJkLWltZy10b3B7XG4gICAgbWF4LWhlaWdodDogMzUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTI0cHgpIHtcbiAgICAjY2Fyb3VzZWxFeGFtcGxlU2xpZGVzT25seSB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDM0MHB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuY29sLm1iLTQge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivitiesHomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-activities-home-page',
                templateUrl: './activities-home-page.component.html',
                styleUrls: ['./activities-home-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "91Tx":
/*!******************************************************************!*\
  !*** ./src/app/components/mainpage/nav-bar/nav-bar.component.ts ***!
  \******************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var annyang__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! annyang */ "RLqe");
/* harmony import */ var annyang__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(annyang__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _speech_voice_service_speech_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../speech-voice-service/speech-service.service */ "iwmz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







function NavBarComponent_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_mat_icon_9_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.speechService.startListening(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mic ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_mat_icon_10_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.speechService.startListening(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mic_off ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Chantal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "My profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavBarComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Alle Activiteiten");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavBarComponent {
    constructor(speechService) {
        this.speechService = speechService;
    }
    ngOnInit() {
        annyang__WEBPACK_IMPORTED_MODULE_1__["setLanguage"](this.speechService.languages[0]);
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_speech_voice_service_speech_service_service__WEBPACK_IMPORTED_MODULE_2__["SpeechServiceService"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 25, vars: 4, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "default-color"], [1, "brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent-333", "aria-controls", "navbarSupportedContent-333", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent-333", 1, "collapse", "navbar-collapse", "ml-lg-5"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], [1, "nav-link", "button--primary"], ["class", "icon-size ", 3, "click", 4, "ngIf"], ["routerLink", "/home", 1, "nav-link", "button--primary"], [1, "icon-size"], [1, "navbar-nav", "ml-auto", "nav-flex-icons"], [1, "nav-item"], [1, "nav-link", "waves-effect", "waves-light"], [1, "fab", "fa-twitter"], [1, "fab", "fa-google-plus-g"], ["class", "nav-item dropdown", 4, "ngIf", "ngIfElse"], ["notLoggedIn", ""], [1, "icon-size", 3, "click"], [1, "nav-item", "dropdown"], ["id", "navbarDropdownMenuLink-333", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle", "button--primary"], [1, "fas", "fa-user"], ["src", "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg", "alt", "avatar image", "height", "35", 1, "rounded-circle", "z-depth-0"], ["id", "dropDown", "aria-labelledby", "navbarDropdownMenuLink-333", 1, "dropdown-menu", "dropdown-menu-right", "dropdown-default"], ["routerLink", "/profile", 1, "dropdown-item", "text-white", "button--primary"], ["routerLink", "/register", 1, "dropdown-item", "text-white", "button--primary"], [1, "dropdown-item", "text-white", "button--primary"], ["routerLink", "/activityoverview", 1, "nav-link", "text-white", "button--primary"], ["routerLink", "/login", 1, "nav-link", "button--primary", "text-white"], ["routerLink", "/register", 1, "nav-link", "button--primary", "text-white"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dagje uit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavBarComponent_mat_icon_9_Template, 2, 0, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavBarComponent_mat_icon_10_Template, 2, 0, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, NavBarComponent_li_22_Template, 12, 0, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, NavBarComponent_ng_template_23_Template, 9, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.speechService.isListening);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.speechService.isListening);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".icon-size[_ngcontent-%COMP%] {\n    cursor: pointer;\n    font-size: 50px;\n    width: 50px;\n    height: 50px;\n    color: white;\n}\n\nnav[_ngcontent-%COMP%] {\n    background-color: var(--color-default);\n}\n\nh2[_ngcontent-%COMP%]{\n    font-style: italic;\n    color: var(--white);\n    margin: 0;\n}\n\n#dropDown[_ngcontent-%COMP%] {\n    background-color: var(--color-default);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWlucGFnZS9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0NBQXNDO0FBQzFDOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21haW5wYWdlL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24tc2l6ZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5uYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRlZmF1bHQpO1xufVxuaDJ7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4jZHJvcERvd24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRlZmF1bHQpO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return [{ type: _speech_voice_service_speech_service_service__WEBPACK_IMPORTED_MODULE_2__["SpeechServiceService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    apirUrl: "http://localhost:8080/rest",
    environmentName: 'development',
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DZ0t":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





function ProfileComponent_button_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Opslaan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.hasChanged);
} }
function ProfileComponent_label_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "dieren");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_label_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "shopping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_label_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Strand");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileComponent_label_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "wintersport");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfileComponent {
    constructor() {
        this.editMyInterestsIsClicked = false;
        this.myInterestsText = "Mijn interesses";
        this.buttonInterestsText = "Wijzig mijn interesses";
        this.hasChanged = false;
    }
    ngOnInit() {
    }
    editMyInterests() {
        this.editMyInterestsIsClicked = !this.editMyInterestsIsClicked;
        if (this.editMyInterestsIsClicked) {
            this.myInterestsText = "Selecteer interesses";
            this.buttonInterestsText = "Interesses opslaan";
        }
        else {
            this.myInterestsText = "Mijn interesses";
            this.buttonInterestsText = "Wijzig mijn interesses";
        }
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 112, vars: 7, consts: [["lang", "nl"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width"], ["id", "headerImage", 1, "header-image--profile", 2, "background-image", "url('assets/Images/flowers.jpeg')"], [1, "wrapper"], [1, "container", "container--profile"], [1, "profile--left"], ["action", "", "method", "POST"], [1, "formRegister"], ["id", "input-fields-user-information"], [1, "form--input"], ["type", "text", "id", "surname", "name", "Voornaam", "required", "", "maxlength", "20", 1, "color", 3, "keyup"], ["type", "text", "name", "Achternaam", "id", "lastname", "required", "", "maxlength", "20", 3, "keyup"], ["type", "date", "name", "Geboortedatum", "id", "birthdate", "required", "", 3, "keyup"], [1, "form--radio"], ["for", "choice_man"], ["type", "radio", "id", "choice_man", "name", "gender", "value", "man", "checked", "", 3, "keyup"], ["for", "choice_woman"], ["type", "radio", "id", "choice_woman", "name", "gender", "value", "vrouw", 3, "keyup"], ["for", "choice_diff"], ["type", "radio", "id", "choice_diff", "name", "gender", "value", "anders", 3, "keyup"], ["id", "email", "type", "email", "name", "mailadres", "maxlength", "40", 3, "keyup"], [1, "show-password"], [1, "fa", "fa-eye"], ["type", "password", "name", "wachtwoord", "id", "password1", "maxlength", "30", "required", "required", 1, "form_input", 3, "keyup"], ["type", "password", "name", "wachtwoord", "id", "password2", "maxlength", "30", "required", "required", 1, "form_input", 3, "keyup"], ["id", "save", "class", "button button--primary button--form", 3, "disabled", 4, "ngIf"], [1, "user-info"], ["id", "profileImage", 1, "profile-picture"], [1, "edit-icon"], [1, "profile--right"], ["id", "pictures-section", 1, "pictures-section"], ["for", "muziek", 1, "interest"], ["name", "interest", "value", "muziek", "type", "checkbox", "checked", "", "id", "muziek"], [1, "interest--checked", "fas", "fa-check"], [1, "interest--image", 2, "background-image", "url('assets/Images/Interests/muziek.jpg')"], [1, "interest--name"], ["for", "strand", 1, "interest"], ["name", "interest", "value", "strand", "type", "checkbox", "checked", "", "id", "strand"], [1, "interest--image", 2, "background-image", "url('assets/Images/Interests/strand.jpg')"], ["for", "avontuur", 1, "interest"], ["name", "interest", "value", "avontuur", "type", "checkbox", "checked", "", "id", "avontuur"], [1, "interest--image", 2, "background-image", "url('assets/Images/Interests/avontuur.jpg')"], ["for", "dieren", "class", "interest", 4, "ngIf"], ["for", "shopping", "class", "interest", 4, "ngIf"], ["for", "sporten", "class", "interest", 4, "ngIf"], ["for", "wintersport", "class", "interest", 4, "ngIf"], [1, "button", "button--primary", "float-right", 3, "click"], [1, "container"], [1, "button", "button--primary"], [1, "container", "container-activity-thumbnails"], [1, "activity-thumbnail--image", 2, "background-image", "url('/assets/Images/landscape.jpeg')"], [1, "activity-thumbnail"], [1, "activity-thumbnail--image", 2, "background-image", "url('/src/assets/Images/activityImage/fietsen.jpg')"], [1, "activity-thumbnail--image", 2, "background-image", "url('/assets/Images/airballoon.jpeg')"], ["id", "save", 1, "button", "button--primary", "button--form", 3, "disabled"], ["for", "dieren", 1, "interest"], ["name", "interest", "value", "dieren", "type", "checkbox", "id", "dieren"], [1, "interest--image", 2, "background-image", "url('assets/Images/Interests/dieren.jpg')"], ["for", "shopping", 1, "interest"], ["name", "interest", "value", "shopping", "type", "checkbox", "id", "shopping"], [1, "interest--image", 2, "background-image", "url('assets/Images/Interests/shopping.jpg')"], ["for", "sporten", 1, "interest"], ["name", "interest", "value", "sporten", "type", "checkbox", "id", "sporten"], [1, "interest--image", 2, "background-image", "url('assets/Images/Interests/sporten.jpg')"], ["for", "wintersport", 1, "interest"], ["name", "interest", "value", "wintersport", "type", "checkbox", "id", "wintersport"], [1, "interest--image", 2, "background-image", "url('assets/Images/Interests/wintersport.jpg')"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mijn profiel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Persoonlijke gegevens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Voornaam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileComponent_Template_input_keyup_19_listener() { return ctx.hasChanged = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Achternaam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileComponent_Template_input_keyup_23_listener() { return ctx.hasChanged = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Geboortedatum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileComponent_Template_input_keyup_27_listener() { return ctx.hasChanged = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileComponent_Template_input_keyup_30_listener() { return ctx.hasChanged = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Man");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileComponent_Template_input_keyup_34_listener() { return ctx.hasChanged = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Vrouw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileComponent_Template_input_keyup_38_listener() { return ctx.hasChanged = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Anders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileComponent_Template_input_keyup_44_listener() { return ctx.hasChanged = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Wachtwoord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileComponent_Template_input_keyup_50_listener() { return ctx.hasChanged = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Bevestiging wachtwoord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ProfileComponent_Template_input_keyup_55_listener() { return ctx.hasChanged = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ProfileComponent_button_57_Template, 2, 1, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "muziek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Strand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "avontuur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, ProfileComponent_label_85_Template, 6, 0, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, ProfileComponent_label_86_Template, 6, 0, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, ProfileComponent_label_87_Template, 6, 0, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, ProfileComponent_label_88_Template, 6, 0, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_89_listener() { return ctx.editMyInterests(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Al mijn acitiviteiten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Activiteit1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Activiteit 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Activiteit 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasChanged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.myInterestsText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMyInterestsIsClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMyInterestsIsClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMyInterestsIsClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMyInterestsIsClicked);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.buttonInterestsText, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".container--profile[_ngcontent-%COMP%]{\n    grid-template-columns: 2fr 1fr 2fr;\n    grid-template-rows: auto;\n}\n\n.profile-picture[_ngcontent-%COMP%]{\n    width: 150px;\n    height: 150px;\n    border-radius: 100%;\n    background-position: center;\n    background-size: cover;\n    background-color: var(--color-default);\n    margin: -75px auto 1rem auto;\n    border: 4px solid var(--color-default);\n    position: relative;\n    background-image: url(\"https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg\");\n}\n\n.header-image--profile[_ngcontent-%COMP%]{\n    height: 200px;\n    width: 100%;\n    background-size: cover;\n    background-position: center;\n}\n\n.container-activity-thumbnails[_ngcontent-%COMP%]{\n    grid-template-columns: repeat(3, 1fr);\n    transition: background 0.2s;\n    background: linear-gradient(to top, var(--color-default) 5%, transparent 50%);\n    position: relative;\n    min-height: 200px;\n    padding: 1rem;\n    border-radius: 20px;\n    overflow: hidden;\n}\n\n.activity-thumbnail--image[_ngcontent-%COMP%] {\n    background-position: center;\n    background-size: cover;\n    border-radius: 20px;\n    height: 100%;\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n.activity-thumbnail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\n    font-family: 'Open Sans', sans-serif;\n    font-weight: normal;\n    padding: 1rem;\n    bottom: 1rem;\n    left: 1rem;\n    right: 1rem;\n    color: var(--color-white);\n    font-size: 1.4rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2; \n    -webkit-box-orient: vertical;\n}\n\n.formRegister[_ngcontent-%COMP%]{\n    width: 100%;\n}\n\n.upload_picture[_ngcontent-%COMP%]{\n    width: 50px;\n    height: 50px;\n}\n\n.pictures-section[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 2rem;\n}\n\n.interest--image[_ngcontent-%COMP%]{\n    height: 150px;\n    box-sizing: border-box;\n    border-radius: var(--border-radius);\n    border: 0 solid transparent;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    margin-bottom: .5rem;\n}\n\n.interest[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .interest--image[_ngcontent-%COMP%]{\n    border: 10px solid var(--color-default);\n}\n\n.interest[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .interest--checked[_ngcontent-%COMP%]{\n    opacity: 1;\n}\n\n.interest[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    display: none;\n}\n\n.interest[_ngcontent-%COMP%]   .interest--name[_ngcontent-%COMP%]{\n    font-family: UniSansSemiBold, sans-serif;\n    font-size: 1rem;\n    display:block;\n    text-transform: uppercase;\n    text-align: center;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.edit-icon[_ngcontent-%COMP%]{\n    position: relative;\n    left: 1rem;\n    cursor: pointer;\n    font-size: 35px;\n    float: right;\n    width: 50px;\n    height: 50px;\n    color: var(--color-default);\n}\n\n@media only screen and (max-width: 48em){\n    .container--profile[_ngcontent-%COMP%]{\n        grid-template-columns: 1fr;\n    }\n    \n    .container--profile[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(1){\n        order: 3;\n    }\n    \n    .container--profile[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(2) {\n        order: 1;\n    }\n    \n    .container--profile[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(3) {\n        order: 2;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLHNDQUFzQztJQUN0Qyw0QkFBNEI7SUFDNUIsc0NBQXNDO0lBQ3RDLGtCQUFrQjtJQUNsQixnRkFBZ0Y7QUFDcEY7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsMkJBQTJCO0lBQzNCLDZFQUE2RTtJQUM3RSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBaUI7T0FBakIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixxQkFBcUIsRUFBRSw0QkFBNEI7SUFDbkQsNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQywyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxlQUFlO0lBQ2YsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUEsa0JBQWtCOztBQUNsQiwwQkFBMEI7O0FBQzFCLElBQUk7O0FBQ0oscUJBQXFCOztBQUNyQixrREFBa0Q7O0FBQ2xELHlCQUF5Qjs7QUFDekIsaUNBQWlDOztBQUNqQywwQkFBMEI7O0FBQzFCLGdCQUFnQjs7QUFDaEIsbUJBQW1COztBQUNuQiwwQkFBMEI7O0FBQzFCLElBQUk7O0FBQ0o7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0FBQy9COztBQUVBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7SUFDQSxNQUFNO0lBQ047UUFDSSxRQUFRO0lBQ1o7SUFDQSxtQkFBbUI7SUFDbkI7UUFDSSxRQUFRO0lBQ1o7SUFDQSxxQkFBcUI7SUFDckI7UUFDSSxRQUFRO0lBQ1o7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLS1wcm9maWxle1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmciAyZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xufVxuXG4ucHJvZmlsZS1waWN0dXJle1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGVmYXVsdCk7XG4gICAgbWFyZ2luOiAtNzVweCBhdXRvIDFyZW0gYXV0bztcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1jb2xvci1kZWZhdWx0KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9tZGJvb3RzdHJhcC5jb20vaW1nL1Bob3Rvcy9BdmF0YXJzL2F2YXRhci01LmpwZ1wiKTtcbn1cbi5oZWFkZXItaW1hZ2UtLXByb2ZpbGV7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci1hY3Rpdml0eS10aHVtYm5haWxze1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHZhcigtLWNvbG9yLWRlZmF1bHQpIDUlLCB0cmFuc3BhcmVudCA1MCUpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmFjdGl2aXR5LXRodW1ibmFpbC0taW1hZ2Uge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmFjdGl2aXR5LXRodW1ibmFpbCBoM3tcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvdHRvbTogMXJlbTtcbiAgICBsZWZ0OiAxcmVtO1xuICAgIHJpZ2h0OiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZSk7XG4gICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7IC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cbi5mb3JtUmVnaXN0ZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4udXBsb2FkX3BpY3R1cmV7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuLnBpY3R1cmVzLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgICBncmlkLWdhcDogMnJlbTtcbn1cblxuLmludGVyZXN0LS1pbWFnZXtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYm9yZGVyOiAwIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG4uaW50ZXJlc3QgaW5wdXQ6Y2hlY2tlZCB+IC5pbnRlcmVzdC0taW1hZ2V7XG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHZhcigtLWNvbG9yLWRlZmF1bHQpO1xufVxuXG4uaW50ZXJlc3QgaW5wdXQ6Y2hlY2tlZCB+IC5pbnRlcmVzdC0tY2hlY2tlZHtcbiAgICBvcGFjaXR5OiAxO1xufVxuLmludGVyZXN0IGlucHV0e1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5pbnRlcmVzdCAuaW50ZXJlc3QtLW5hbWV7XG4gICAgZm9udC1mYW1pbHk6IFVuaVNhbnNTZW1pQm9sZCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZGlzcGxheTpibG9jaztcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyouY2hhcnQtd3JhcHBlcnsqL1xuLyogICAgcG9zaXRpb246IHJlbGF0aXZlOyovXG4vKn0qL1xuLyouY2hhcnQtcGVyY2VudGFnZXsqL1xuLyogICAgZm9udC1mYW1pbHk6ICdVbmlTYW5zU2VtaUJvbGQnLCBzYW5zLXNlcmlmOyovXG4vKiAgICBmb250LXNpemU6IDEuMnJlbTsqL1xuLyogICAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTsqL1xuLyogICAgcG9zaXRpb246IGFic29sdXRlOyovXG4vKiAgICB0b3A6IDUwJTsqL1xuLyogICAgd2lkdGg6IDEwMCU7Ki9cbi8qICAgIHRleHQtYWxpZ246IGNlbnRlcjsqL1xuLyp9Ki9cbi5lZGl0LWljb257XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kZWZhdWx0KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OGVtKXtcbiAgICAuY29udGFpbmVyLS1wcm9maWxle1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG4gICAgLypCaW8qL1xuICAgIC5jb250YWluZXItLXByb2ZpbGUgPiBkaXY6bnRoLW9mLXR5cGUoMSl7XG4gICAgICAgIG9yZGVyOiAzO1xuICAgIH1cbiAgICAvKk5hbWUgYW5kIHBpY3R1cmUqL1xuICAgIC5jb250YWluZXItLXByb2ZpbGUgPiBkaXY6bnRoLW9mLXR5cGUoMikge1xuICAgICAgICBvcmRlcjogMTtcbiAgICB9XG4gICAgLypDaGFydCBvciBjaGF0IHdpdGgqL1xuICAgIC5jb250YWluZXItLXByb2ZpbGUgPiBkaXY6bnRoLW9mLXR5cGUoMykge1xuICAgICAgICBvcmRlcjogMjtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FFw+":
/*!**************************************!*\
  !*** ./src/app/json/activities.json ***!
  \**************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"image\":\"wandeling.jpg\",\"activityTitle\":\"wandelen\",\"description\":\"In de herfst komen de mooiste kleuren van de natuur naar buiten. Daarom is het de perfecte gelegenheid om met goed weer een wandeling te maken door bijvoorbeeld een bos.\",\"categories\":[\"herfst\",\"wandelen\",\"avontuur\",\"natuur\",\"actief\"],\"location\":\"overal\"},{\"image\":\"muiderslot.jpg\",\"activityTitle\":\"Het Muiderslot\",\"description\":\"Vlakbij Amsterdam ligt al ruim 700 jaar het stoere Muiderslot, omringd door water en kasteeltuinen. Het is een van de oudste én best bewaarde kastelen van Nederland. Gebouwd met één doel: de verdediging. Het kasteel uit 1285 kent een lange en roerige geschiedenis. Dwaal rond en ontdek hoe de vijand werd tegengewerkt en hoe vroeger het leven was op een kasteel.\",\"categories\":[\"herfst\",\"wandelen\",\"avontuur\"],\"location\":\"Muiden\"},{\"image\":\"pompoen.jpg\",\"activityTitle\":\"pompoen uithollen\",\"description\":\"Eerst zoek je een mooie pompoen uit, dan maak je een ontwerp van hoe jouw pompoen eruit moet gaan zien, en dan … dan komt het zware werk: het uithollen. Als je klaar bent, is er een korte pauze met een limonade én een zakje chips. Tijd voor de laatste en leukste klus: het maken van je pompoengezicht. Het uitsnijden gaat met het speciale gereedschap gelukkig heel makkelijk en veilig. Lichtje erin en Klaar!\",\"categories\":[\"halloween\",\"thuis\"],\"location\":\"thuis\"},{\"image\":\"mini-halloween.jpg\",\"activityTitle\":\"Mini-Halloween: Speuren naar spinnetjes en pompoentjes\",\"description\":\"Herfst en Halloween. In Miniworld betekent dit HELP. Reusachtige spinnen en pompoenen zijn neergedaald in onze miniatuurwereld? Help jij mee deze te vinden? Dan kunnen onze mini-bewoners weer rustig slapen\",\"categories\":[\"halloween\",\"herfst\"],\"location\":\"Rotterdam\"},{\"image\":\"fietsen.jpg\",\"activityTitle\":\"Fietsen met vriendin\",\"description\":\"Gezellig fietsen met uw vriendin door de mooiste paden van Nederland met onze begeleiders.\",\"categories\":[\"avontuur\",\"natuur\",\"fietsen\",\"actief\"],\"location\":\"overal\"},{\"image\":\"bowlen.jpg\",\"activityTitle\":\"Disco Bowlen\",\"description\":\"Zin in bowlen? Kom lekker met uw vriendin of familie disco Bowlen.\",\"categories\":[\"binnen\",\"actief\"],\"location\":\"\"},{\"image\":\"mondkapjes.jpg\",\"activityTitle\":\"Mondkapjes maken\",\"description\":\"Geen zin om naar buiten te gaan? Maak thuis leuke mondkapjes voor je zelf of vriendin.\",\"categories\":[\"binnen\",\"corona\",\"creatief\",\"thuis\"],\"location\":\"thuis\"}]");

/***/ }),

/***/ "K0BM":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/activityOverview/activity-overview/activity-overview.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ActivityOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityOverviewComponent", function() { return ActivityOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _json_activities_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../json/activities.json */ "FFw+");
var _json_activities_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../json/activities.json */ "FFw+", 1);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");

// @ts-ignore





function ActivityOverviewComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r2, " ");
} }
function ActivityOverviewComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/Images/activityImage/", activity_r3.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", activity_r3.activityTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", activity_r3.activityTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", activity_r3.description, " ");
} }
class ActivityOverviewComponent {
    constructor() {
        this.activityArray = _json_activities_json__WEBPACK_IMPORTED_MODULE_1__;
        this.categoryArray = [];
    }
    ngOnInit() {
        this.getAllCategories();
    }
    getAllCategories() {
        for (let activity of this.activityArray) {
            for (let i = 0; i < activity.categories.length; i++) {
                if (!this.categoryArray.includes(activity.categories[i])) {
                    this.categoryArray.push(activity.categories[i]);
                }
            }
        }
    }
}
ActivityOverviewComponent.ɵfac = function ActivityOverviewComponent_Factory(t) { return new (t || ActivityOverviewComponent)(); };
ActivityOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivityOverviewComponent, selectors: [["app-activity-overview"]], decls: 15, vars: 6, consts: [["id", "header"], [1, "activity-overview", "row-cols-1", "row-cols-md-3"], [1, "activitySearch"], ["type", "search", "placeholder", "Zoek hier uw activiteit", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-1", "filterlist"], ["type", "button", "class", "btn button--primary", "data-toggle", "button", 4, "ngFor", "ngForOf"], ["class", "activity col-2 mb-4", 4, "ngFor", "ngForOf"], ["type", "button", "data-toggle", "button", 1, "btn", "button--primary"], [1, "activity", "col-2", "mb-4"], [1, "card-img-top", 3, "src", "alt"], [1, "card-title"], [1, "card-text"]], template: function ActivityOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Alle activiteiten");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Zoek Activiteit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActivityOverviewComponent_Template_input_ngModelChange_8_listener($event) { return ctx.activitySearchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Filters:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ActivityOverviewComponent_button_12_Template, 2, 1, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ActivityOverviewComponent_div_13_Template, 6, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.activitySearchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 3, ctx.activityArray, ctx.activitySearchText));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__["Ng2SearchPipe"]], styles: ["header[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 30%;\n    margin: -5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 70px;\n    text-shadow: 0 0 20px white;\n}\n\n\nimg[_ngcontent-%COMP%]{\n    height: 350px;\n    width: 100%;\n}\n\n\n.btn[_ngcontent-%COMP%]{\n    float: left;\n    margin: 1px;\n    background-color: var(--color-default);\n    border-color: var(--color-black);\n    box-sizing: border-box;\n}\n\n\n.button--primary[_ngcontent-%COMP%]:not(:disabled):not(.disabled).active{\n    background-color: var(--color-blue);\n}\n\n\n.activity-overview[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n}\n\n\n.activity[_ngcontent-%COMP%] {\n    float: right;\n    border: 1px solid var(--color-default);\n    padding: 0;\n    margin-top: 10px;\n    margin-right: 10px;\n    box-sizing: border-box;\n    box-shadow: 5px 5px 5px var(--color-default);\n    max-width: 35%;\n    border-radius: .25rem;\n}\n\n\n.activity[_ngcontent-%COMP%]:hover {\n    transform: translateY(-10px);\n    cursor: pointer;\n    transition: .2s;\n    background-color: var(--color-default);\n}\n\n\n.card-title[_ngcontent-%COMP%] {\n    padding: 5px;\n    width: 100%;\n    text-align: center;\n    position: center;\n    font-size: 25px;\n}\n\n\n.card-text[_ngcontent-%COMP%]{\n    opacity: .5;\n    padding: 5px;\n}\n\n\n.filterlist[_ngcontent-%COMP%]{\n    max-width: 25%;\n    max-height: 100%;\n    position: absolute;\n}\n\n\n.activitySearch[_ngcontent-%COMP%]{\n    margin: 25px;\n    margin-top: 0;\n    max-width: 100%;\n    position: center;\n}\n\n\n@media screen and (max-width: 800px) {\n    .activity[_ngcontent-%COMP%] {\n        max-width: 95%;\n        float: top;\n        position: center;\n    }\n    .filterlist[_ngcontent-%COMP%]{\n        max-width: 100%;\n        position: initial;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY3Rpdml0eU92ZXJ2aWV3L2FjdGl2aXR5LW92ZXJ2aWV3L2FjdGl2aXR5LW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0FBQy9COzs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxzQ0FBc0M7SUFDdEMsZ0NBQWdDO0lBQ2hDLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7OztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLDRDQUE0QztJQUM1QyxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsZUFBZTtJQUNmLHNDQUFzQztBQUMxQzs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0k7UUFDSSxjQUFjO1FBQ2QsVUFBVTtRQUNWLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hY3Rpdml0eU92ZXJ2aWV3L2FjdGl2aXR5LW92ZXJ2aWV3L2FjdGl2aXR5LW92ZXJ2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAlO1xuICAgIG1hcmdpbjogLTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDcwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAyMHB4IHdoaXRlO1xufVxuXG5pbWd7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJ0bntcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kZWZhdWx0KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYnV0dG9uLS1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcbn1cblxuLmFjdGl2aXR5LW92ZXJ2aWV3IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYWN0aXZpdHkge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1kZWZhdWx0KTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggdmFyKC0tY29sb3ItZGVmYXVsdCk7XG4gICAgbWF4LXdpZHRoOiAzNSU7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xufVxuXG4uYWN0aXZpdHk6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IC4ycztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kZWZhdWx0KTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5jYXJkLXRleHR7XG4gICAgb3BhY2l0eTogLjU7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4uZmlsdGVybGlzdHtcbiAgICBtYXgtd2lkdGg6IDI1JTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmFjdGl2aXR5U2VhcmNoe1xuICAgIG1hcmdpbjogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5hY3Rpdml0eSB7XG4gICAgICAgIG1heC13aWR0aDogOTUlO1xuICAgICAgICBmbG9hdDogdG9wO1xuICAgICAgICBwb3NpdGlvbjogY2VudGVyO1xuICAgIH1cbiAgICAuZmlsdGVybGlzdHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivityOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-activity-overview',
                templateUrl: './activity-overview.component.html',
                styleUrls: ['./activity-overview.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "PqAt":
/*!************************************************************************!*\
  !*** ./src/app/components/HomePage/bannerHomePage/banner.component.ts ***!
  \************************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 8, vars: 0, consts: [["id", "carouselExampleSlidesOnly", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], ["src", "assets/Images/tree.jpeg", "alt", "tree image", 1, "d-block", "w-100"], [1, "carousel-item"], ["src", "assets/Images/tulip.jpeg", "alt", "tulip image", 1, "d-block", "w-100"], ["src", "assets/Images/landscape.jpeg", "alt", "landscape image", 1, "d-block", "w-100"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".carousel-inner[_ngcontent-%COMP%] {\n  max-height: 250px;\n  \n}\n\n.carousel-inner[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translate(-50%, -.1%);\n  min-width: 100%;\n  height: auto;\n  margin: 0 auto;\n  z-index: -1;\n  filter: blur(1px);\n  -webkit-filter: blur(1px);\n}\n\n#carouselExampleSlidesOnly[_ngcontent-%COMP%] {\n  max-height: 250px;\n}\n\n\n\n@media screen  and (max-width: 1120px) {\n  #carouselExampleSlidesOnly[_ngcontent-%COMP%] {\n    max-height: 250px;\n  }\n}\n\n@media screen  and (max-width: 748px) {\n  #carouselExampleSlidesOnly[_ngcontent-%COMP%] {\n    max-height: 220px;\n  }\n}\n\n@media screen  and (max-width: 486px) {\n  #carouselExampleSlidesOnly[_ngcontent-%COMP%] {\n    max-height: 140px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9iYW5uZXJIb21lUGFnZS9iYW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixZQUFZO0VBQ1osY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBLDhDQUE4Qzs7QUFFOUM7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL0hvbWVQYWdlL2Jhbm5lckhvbWVQYWdlL2Jhbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWlubmVyIHtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG4gIC8qbWF4LWhlaWdodDogNjAwcHg7Ki9cbn1cblxuLmNhcm91c2VsLWlubmVyIHtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtLjElKTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB6LWluZGV4OiAtMTtcbiAgZmlsdGVyOiBibHVyKDFweCk7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDFweCk7XG59XG5cbiNjYXJvdXNlbEV4YW1wbGVTbGlkZXNPbmx5IHtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG59XG5cbi8qKioqKioqKioqKiotLSAgbWVkaWEgcXVlcnkncyAgLS0qKioqKioqKioqKiovXG5cbkBtZWRpYSBzY3JlZW4gIGFuZCAobWF4LXdpZHRoOiAxMTIwcHgpIHtcbiAgI2Nhcm91c2VsRXhhbXBsZVNsaWRlc09ubHkge1xuICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gIGFuZCAobWF4LXdpZHRoOiA3NDhweCkge1xuICAjY2Fyb3VzZWxFeGFtcGxlU2xpZGVzT25seSB7XG4gICAgbWF4LWhlaWdodDogMjIwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiAgYW5kIChtYXgtd2lkdGg6IDQ4NnB4KSB7XG4gICNjYXJvdXNlbEV4YW1wbGVTbGlkZXNPbmx5IHtcbiAgICBtYXgtaGVpZ2h0OiAxNDBweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "QIBy":
/*!********************************************************************************!*\
  !*** ./src/app/components/categorypage/categorypage/categorypage.component.ts ***!
  \********************************************************************************/
/*! exports provided: CategorypageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorypageComponent", function() { return CategorypageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _json_activities_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../json/activities.json */ "FFw+");
var _json_activities_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../json/activities.json */ "FFw+", 1);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");







function CategorypageComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../../../assets/Images/activityImage/", activity_r1.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", activity_r1.activityTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", activity_r1.activityTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", activity_r1.description, " ");
} }
class CategorypageComponent {
    constructor() {
        this.activityArray = _json_activities_json__WEBPACK_IMPORTED_MODULE_1__;
        this.category = "herfst";
    }
    ngOnInit() {
    }
}
CategorypageComponent.ɵfac = function CategorypageComponent_Factory(t) { return new (t || CategorypageComponent)(); };
CategorypageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategorypageComponent, selectors: [["app-categorypage"]], decls: 11, vars: 9, consts: [["id", "header"], [1, "search-div"], ["type", "search", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], [1, "activity-overview", "row-cols-1", "row-cols-md-3"], ["class", "activity col-2 mb-4", 4, "ngFor", "ngForOf"], [1, "activity", "col-2", "mb-4"], [1, "card-img-top", 3, "src", "alt"], [1, "card-title"], [1, "card-text"]], template: function CategorypageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Herfst");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CategorypageComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchtext = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CategorypageComponent_div_8_Template, 6, 4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "Zoek hier naar activiteiten gerelateerd aan ", ctx.category, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchtext);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, ctx.activityArray, ctx.category), ctx.searchtext));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__["Ng2SearchPipe"]], styles: ["header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30%;\n  background-image: linear-gradient(to bottom, rgba(220,220,220,0.7) 0%,rgba(220,220,220,0.7) 100%),\n  url('fall background.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 100%;\n  margin: -5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 70px;\n  text-shadow: 0 0 20px white;\n}\n\n\nimg[_ngcontent-%COMP%]{\n  size: auto;\n}\n\n\n.activity-overview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  padding: .2rem;\n  max-width: 100%;\n\n\n}\n\n\n.activity[_ngcontent-%COMP%] {\n  float: left;\n  border: 1px solid var(--color-default);\n  padding: 0;\n  margin: 15px;\n  box-sizing: border-box;\n  border-radius: var(--border-radius);\n  max-width: 31%;\n\n}\n\n\n.card-img-top[_ngcontent-%COMP%]{\n  border-radius: var(--border-radius);\n}\n\n\n.card-title[_ngcontent-%COMP%] {\n  padding: 5px;\n  width: 100%;\n  text-align: center;\n  position: center;\n}\n\n\n.card-text[_ngcontent-%COMP%]{\n  opacity: .5;\n  padding: 5px;\n  max-height: 50px;\n  \n}\n\n\n.activity[_ngcontent-%COMP%]:hover {\n  transform: translateY(-10px);\n  cursor: pointer;\n  transition: .6s;\n  background-color: var(--color-default);\n}\n\n\n.form-control[_ngcontent-%COMP%]{\n  max-width: 100%;\n}\n\n\n.search-div[_ngcontent-%COMP%]{\n  display: grid;\n  grid-template-columns: 3fr .1fr;\n  align-items: center;\n  padding: 1rem;\n}\n\n\n.search-div\n@media[_ngcontent-%COMP%]   screen[_ngcontent-%COMP%]   and[_ngcontent-%COMP%]   (max-width[_ngcontent-%COMP%]:   767px)[_ngcontent-%COMP%] {\n  .activity {\n    max-width: 90%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yeXBhZ2UvY2F0ZWdvcnlwYWdlL2NhdGVnb3J5cGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWDs0QkFDNEM7RUFDNUMsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOzs7QUFHQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7OztBQUVBO0VBQ0UsVUFBVTtBQUNaOzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZUFBZTs7O0FBR2pCOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQ0FBc0M7RUFDdEMsVUFBVTtFQUNWLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGNBQWM7O0FBRWhCOzs7QUFDQTtFQUNFLG1DQUFtQztBQUNyQzs7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsZUFBZTtFQUNmLHNDQUFzQztBQUN4Qzs7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOzs7QUFDQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7O0FBQ0E7O0VBRUU7SUFDRSxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3J5cGFnZS9jYXRlZ29yeXBhZ2UvY2F0ZWdvcnlwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjIwLDIyMCwyMjAsMC43KSAwJSxyZ2JhKDIyMCwyMjAsMjIwLDAuNykgMTAwJSksXG4gIHVybChcInNyYy9hc3NldHMvSW1hZ2VzL2ZhbGwgYmFja2dyb3VuZC5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBtYXJnaW46IC01cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbmhlYWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgdGV4dC1zaGFkb3c6IDAgMCAyMHB4IHdoaXRlO1xufVxuXG5pbWd7XG4gIHNpemU6IGF1dG87XG59XG5cbi5hY3Rpdml0eS1vdmVydmlldyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IC4ycmVtO1xuICBtYXgtd2lkdGg6IDEwMCU7XG5cblxufVxuXG4uYWN0aXZpdHkge1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItZGVmYXVsdCk7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTVweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIG1heC13aWR0aDogMzElO1xuXG59XG4uY2FyZC1pbWctdG9we1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5jYXJkLXRleHR7XG4gIG9wYWNpdHk6IC41O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG4gIC8qdGV4dC1vdmVyZmxvdzogaGlkZGVuOyovXG59XG5cbi5hY3Rpdml0eTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogLjZzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kZWZhdWx0KTtcbn1cblxuLmZvcm0tY29udHJvbHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLnNlYXJjaC1kaXZ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIC4xZnI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG59XG4uc2VhcmNoLWRpdlxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFjdGl2aXR5IHtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategorypageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-categorypage',
                templateUrl: './categorypage.component.html',
                styleUrls: ['./categorypage.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_mainpage_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mainpage/nav-bar/nav-bar.component */ "91Tx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'Digital-Life';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_mainpage_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_mainpage_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mainpage/header/header.component */ "zfcM");
/* harmony import */ var _components_mainpage_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mainpage/nav-bar/nav-bar.component */ "91Tx");
/* harmony import */ var _components_HomePage_bannerHomePage_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/HomePage/bannerHomePage/banner.component */ "PqAt");
/* harmony import */ var _components_HomePage_search_home_page_zoekbalk_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/HomePage/search-home-page/zoekbalk-home-page.component */ "w5cE");
/* harmony import */ var _components_HomePage_activities_home_page_activities_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/HomePage/activities-home-page/activities-home-page.component */ "3fzt");
/* harmony import */ var _components_mainpage_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/mainpage/register/register.component */ "ZYUz");
/* harmony import */ var _components_mainpage_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/mainpage/login/login.component */ "+m7b");
/* harmony import */ var _components_categorypage_categorypage_categorypage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/categorypage/categorypage/categorypage.component */ "QIBy");
/* harmony import */ var _components_activitypages_activitywandelen_activitywandelen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/activitypages/activitywandelen/activitywandelen.component */ "eYX5");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _components_activityOverview_activity_overview_activity_overview_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/activityOverview/activity-overview/activity-overview.component */ "K0BM");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _components_about_us_page_about_us_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/about-us-page/about-us-page.component */ "mfBl");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_19__["Ng2SearchPipeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_mainpage_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_mainpage_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
        _components_HomePage_bannerHomePage_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"],
        _components_HomePage_search_home_page_zoekbalk_home_page_component__WEBPACK_IMPORTED_MODULE_7__["ZoekbalkHomePageComponent"],
        _components_HomePage_activities_home_page_activities_home_page_component__WEBPACK_IMPORTED_MODULE_8__["ActivitiesHomePageComponent"],
        _components_mainpage_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
        _components_mainpage_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _components_categorypage_categorypage_categorypage_component__WEBPACK_IMPORTED_MODULE_11__["CategorypageComponent"],
        _components_activitypages_activitywandelen_activitywandelen_component__WEBPACK_IMPORTED_MODULE_12__["ActivitywandelenComponent"],
        _components_activityOverview_activity_overview_activity_overview_component__WEBPACK_IMPORTED_MODULE_16__["ActivityOverviewComponent"],
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"],
        _components_about_us_page_about_us_page_component__WEBPACK_IMPORTED_MODULE_20__["AboutUsPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_19__["Ng2SearchPipeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_mainpage_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _components_mainpage_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
                    _components_HomePage_bannerHomePage_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"],
                    _components_HomePage_search_home_page_zoekbalk_home_page_component__WEBPACK_IMPORTED_MODULE_7__["ZoekbalkHomePageComponent"],
                    _components_HomePage_activities_home_page_activities_home_page_component__WEBPACK_IMPORTED_MODULE_8__["ActivitiesHomePageComponent"],
                    _components_mainpage_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                    _components_mainpage_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                    _components_categorypage_categorypage_categorypage_component__WEBPACK_IMPORTED_MODULE_11__["CategorypageComponent"],
                    _components_activitypages_activitywandelen_activitywandelen_component__WEBPACK_IMPORTED_MODULE_12__["ActivitywandelenComponent"],
                    _components_activityOverview_activity_overview_activity_overview_component__WEBPACK_IMPORTED_MODULE_16__["ActivityOverviewComponent"],
                    _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"],
                    _components_about_us_page_about_us_page_component__WEBPACK_IMPORTED_MODULE_20__["AboutUsPageComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_19__["Ng2SearchPipeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZYUz":
/*!********************************************************************!*\
  !*** ./src/app/components/mainpage/register/register.component.ts ***!
  \********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 112, vars: 0, consts: [["id", "formRegister", "action", "", "method", "POST"], [1, "wrapper", "no-padding"], [1, "grid--half"], ["id", "input-fields-user-information"], [1, "form--input"], ["type", "text", "id", "surname", "name", "Voornaam", "required", "", "maxlength", "20", 1, "color"], ["type", "text", "name", "Achternaam", "id", "lastname", "required", "", "maxlength", "20"], ["type", "date", "name", "Geboortedatum", "id", "birthdate", "required", ""], [1, "form--radio"], ["for", "choice_man"], ["type", "radio", "id", "choice_man", "name", "gender", "value", "man", "checked", ""], ["for", "choice_woman"], ["type", "radio", "id", "choice_woman", "name", "gender", "value", "vrouw"], ["for", "choice_diff"], ["type", "radio", "id", "choice_diff", "name", "gender", "value", "anders"], [1, "pictures_uploaden"], ["src", "../../../../assets/Images/Interests/musea.jpg", 1, "upload_picture"], ["id", "profile_image", "type", "file", "name", "profile_img"], ["id", "email", "type", "email", "name", "mailadres", "maxlength", "40"], [1, "show-password"], [1, "fa", "fa-eye"], ["type", "password", "name", "wachtwoord", "id", "password1", "maxlength", "30", "required", "required", 1, "form_input"], ["type", "password", "name", "wachtwoord", "id", "password2", "maxlength", "30", "required", "required", 1, "form_input"], ["id", "pictures-section", 1, "pictures-section"], ["for", "muziek", 1, "interest"], ["name", "interest", "value", "muziek", "type", "checkbox", "id", "muziek"], [1, "interest--checked", "fas", "fa-check"], [1, "interest--image", 2, "background-image", "url('../../../../assets/Images/Interests/muziek.jpg')"], [1, "interest--name"], ["for", "strand", 1, "interest"], ["name", "interest", "value", "strand", "type", "checkbox", "id", "strand"], [1, "interest--image", 2, "background-image", "url('../../../../assets/Images/Interests/strand.jpg')"], ["for", "avontuur", 1, "interest"], ["name", "interest", "value", "avontuur", "type", "checkbox", "id", "avontuur"], [1, "interest--image", 2, "background-image", "url('../../../../assets/Images/Interests/avontuur.jpg')"], ["for", "dieren", 1, "interest"], ["name", "interest", "value", "dieren", "type", "checkbox", "id", "dieren"], [1, "interest--image", 2, "background-image", "url('../../../../assets/Images/Interests/dieren.jpg')"], ["for", "shopping", 1, "interest"], ["name", "interest", "value", "shopping", "type", "checkbox", "id", "shopping"], [1, "interest--image", 2, "background-image", "url('../../../../assets/Images/Interests/shopping.jpg')"], ["for", "sporten", 1, "interest"], ["name", "interest", "value", "sporten", "type", "checkbox", "id", "sporten"], [1, "interest--image", 2, "background-image", "url('../../../../assets/Images/Interests/sporten.jpg')"], ["for", "wintersport", 1, "interest"], ["name", "interest", "value", "wintersport", "type", "checkbox", "id", "wintersport"], [1, "interest--image", 2, "background-image", "url('../../../../assets/Images/Interests/wintersport.jpg')"], ["id", "submit", "value", "Registreren", "type", "submit", 1, "button", "button--primary", "button--form", "uppercase"], [1, "text-center"], ["routerLink", "/login"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Persoonlijke gegevens");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Voornaam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Achternaam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Geboortedatum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Man");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Vrouw");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Anders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Account instellingen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Profielfoto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Wachtwoord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Bevestiging wachtwoord");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Interesses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Met deze interesses kunnen we voor u de passende activiteiten vinden ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Kies drie interesses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "muziek");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Strand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "avontuur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "dieren");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Strand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "wintersport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Heeft u al een account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".header[_ngcontent-%COMP%]{\n    background-color: var(--color-default);\n}\n.digital-life-title[_ngcontent-%COMP%]{\n    color: var(--color-white);\n}\n.upload_picture[_ngcontent-%COMP%]{\n    width: 100px;\n    height: 100px;\n    background-size: cover;\n}\n.profile_image--preview[_ngcontent-%COMP%]{\n    border-radius: 100%;\n}\n.pictures_uploaden[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-columns: 1fr;\n    align-items: center;\n}\n#log-in[_ngcontent-%COMP%] {\n    color: var(--color-blue);\n}\n.pictures-section[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 2rem;\n}\n.interest--image[_ngcontent-%COMP%]{\n    height: 150px;\n    box-sizing: border-box;\n    border-radius: var(--border-radius);\n    border: 0 solid transparent;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    margin-bottom: .5rem;\n}\n.interest[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .interest--image[_ngcontent-%COMP%]{\n    border: 10px solid var(--color-default);\n}\n.interest[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ .interest--checked[_ngcontent-%COMP%]{\n    opacity: 1;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.interest[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    display: none;\n}\n.interest[_ngcontent-%COMP%]   .interest--name[_ngcontent-%COMP%]{\n    font-family: UniSansSemiBold, sans-serif;\n    font-size: 1rem;\n    display:block;\n    text-transform: uppercase;\n    text-align: center;\n}\n.interest[_ngcontent-%COMP%]:hover {\n    cursor:pointer;\n}\n@media only screen and (max-width: 480px) {\n\n\n}\n@media only screen and (max-width: 1024px){\n\n    *[_ngcontent-%COMP%] {\n        box-sizing: border-box;\n\n    }\n\n    .pictures-section[_ngcontent-%COMP%]{\n        position: relative;\n        top: 1em;\n        align-items: center;\n    }\n    .gallery__img[_ngcontent-%COMP%] {\n        border-radius: 3%;\n        width: 70px;\n        height: 30px;\n    }\n    .description-interests[_ngcontent-%COMP%] {\n        font-family: Arial, serif;\n        font-size: 13px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWlucGFnZS9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhDQUE4QztBQUM5QyxpREFBaUQ7QUFDakQsOENBQThDO0FBQzlDO0lBQ0ksc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFHQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFHQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsY0FBYztBQUNsQjtBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksdUNBQXVDO0FBQzNDO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQSxhQUFhO0FBQ2IsMEJBQTBCO0FBQzFCLElBQUk7QUFHSixzQkFBc0I7QUFDdEIsbUNBQW1DO0FBQ25DLDBCQUEwQjtBQUMxQixzQkFBc0I7QUFDdEIsOEJBQThCO0FBQzlCLCtCQUErQjtBQUMvQixzQkFBc0I7QUFDdEIsd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6QixpREFBaUQ7QUFDakQscUNBQXFDO0FBQ3JDLElBQUk7QUFFSjtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxlQUFlO0lBQ2YsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFHQTs7O0FBR0E7QUFDQTs7SUFFSTtRQUNJLHNCQUFzQjs7SUFFMUI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSx5QkFBeUI7UUFDekIsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWlucGFnZS9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGUtZXh0cmEvZm9ybS5jc3NcIjsqL1xuLypAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGUtZXh0cmEvYnV0dG9ucy5jc3NcIjsqL1xuLypAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGUtZXh0cmEvZ3JpZC5jc3NcIjsqL1xuLmhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kZWZhdWx0KTtcbn1cbi5kaWdpdGFsLWxpZmUtdGl0bGV7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTtcbn1cbi51cGxvYWRfcGljdHVyZXtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucHJvZmlsZV9pbWFnZS0tcHJldmlld3tcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG5cbi5waWN0dXJlc191cGxvYWRlbntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNsb2ctaW4ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ibHVlKTtcbn1cblxuXG4ucGljdHVyZXMtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgIGdyaWQtZ2FwOiAycmVtO1xufVxuXG5cbi5pbnRlcmVzdC0taW1hZ2V7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIGJvcmRlcjogMCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xufVxuLmludGVyZXN0IGlucHV0OmNoZWNrZWQgfiAuaW50ZXJlc3QtLWltYWdle1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCB2YXIoLS1jb2xvci1kZWZhdWx0KTtcbn1cblxuLmludGVyZXN0IGlucHV0OmNoZWNrZWQgfiAuaW50ZXJlc3QtLWNoZWNrZWR7XG4gICAgb3BhY2l0eTogMTtcbn1cbi8qLmludGVyZXN0eyovXG4vKiAgICBwb3NpdGlvbjogcmVsYXRpdmU7Ki9cbi8qfSovXG5cblxuLyouaW50ZXJlc3QtLWNoZWNrZWR7Ki9cbi8qICAgICEqdHJhbnNpdGlvbjogb3BhY2l0eSAuMnM7KiEqL1xuLyogICAgISpkaXNwbGF5OiBibG9jazsqISovXG4vKiAgICAhKm9wYWNpdHk6IDA7KiEqL1xuLyogICAgISpwb3NpdGlvbjogYWJzb2x1dGU7KiEqL1xuLyogICAgISpib3JkZXItcmFkaXVzOiAxMDAlOyohKi9cbi8qICAgICEqdG9wOiAtMXJlbTsqISovXG4vKiAgICAhKnJpZ2h0OiAtMXJlbTsqISovXG4vKiAgICAhKnBhZGRpbmc6IDEwcHg7KiEqL1xuLyogICAgISpiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1vcmFuZ2UpOyohKi9cbi8qICAgICEqY29sb3I6IHZhcigtLWNvbG9yLXdoaXRlKTsqISovXG4vKn0qL1xuXG4uaW50ZXJlc3QgaW5wdXR7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmludGVyZXN0IC5pbnRlcmVzdC0tbmFtZXtcbiAgICBmb250LWZhbWlseTogVW5pU2Fuc1NlbWlCb2xkLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW50ZXJlc3Q6aG92ZXIge1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcblxuXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XG5cbiAgICAqIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIH1cblxuICAgIC5waWN0dXJlcy1zZWN0aW9ue1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMWVtO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAuZ2FsbGVyeV9faW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMyU7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbi1pbnRlcmVzdHMge1xuICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIHNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "eYX5":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/activitypages/activitywandelen/activitywandelen.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ActivitywandelenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitywandelenComponent", function() { return ActivitywandelenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ActivitywandelenComponent {
    constructor() { }
    ngOnInit() {
    }
}
ActivitywandelenComponent.ɵfac = function ActivitywandelenComponent_Factory(t) { return new (t || ActivitywandelenComponent)(); };
ActivitywandelenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActivitywandelenComponent, selectors: [["app-activitywandelen"]], decls: 30, vars: 0, consts: [["id", "header"], [1, "container--grid"], [1, "right-side"], [1, "right-side-grid"], [1, "activity-image-box"], ["src", "../../../../assets/Images/activityImage/wandeling.jpg", 1, "activity-image"], [1, "activity-description"], [1, "activity-description-title"], [1, "left-side"], [1, "left-sid-grid"], [1, "comment-box"], ["placeholder", "Typ hier uw reactie...", 1, "comment-box-input"], [1, "button", "button--primary", "float-right"], [1, "user-comments-box"], [1, "user-comments-box-title"]], template: function ActivitywandelenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Wandeling");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Beschrijving:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "In de herfst komen de mooiste kleuren van de natuur naar buiten. Daarom is het de perfecte gelegenheid om met goed weer een wandeling te maken door bijvoorbeeld een bos. Het is natuurlijk erg om dit met een vriend, familielid of kennis te doen maar het is ook erg leuk om alleen de natuur te ontdekken. Alleen kunt u namelijk ook de mooie geluiden van de vogels en anderen dieren in u opnemen. Dit is natuurlijk erg goed om uw hoofd helemaal leeg te maken en even uw welverdiende rust te pakken.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Plaats reactie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Reacties:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ankie:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Goede tip, ik heb vandaag een prachtige wandeling gemaakt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Jacob:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Leuk, ik heb niet door het bos gewandeld maar door de duinen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container--grid[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-rows: 2fr 2fr;\n}\n.right-side-grid[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 2rem;\n    padding: 1rem;\n}\n.left-sid-grid[_ngcontent-%COMP%]{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 2rem;\n    padding: 1rem;\n}\nheader[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 250px;\n    background-image: linear-gradient(to bottom, rgba(220,220,220,0.7) 0%,rgba(220,220,220,0.7) 100%),\n    url('wandeling.jpg');\n    background-position: center;\n    background-size: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 70px;\n    text-shadow: 0 0 20px white;\n}\n.activity-image-box[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    border-radius: var(--border-radius);\n}\n.activity-image[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    border-radius: var(--border-radius);\n\n}\n.activity-description-title[_ngcontent-%COMP%] {\n    font-weight: bold;\n    margin-left: .5rem;\n}\n.activity-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    padding-left: 1rem;\n    opacity: .5;\n}\n.activity-description[_ngcontent-%COMP%] {\n    border: 1px solid var(--color-default);\n    float: right;\n    width: 100%;\n    border-radius: var(--border-radius);\n}\n.comment-box[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n}\n.comment-box-title[_ngcontent-%COMP%] {\n    font-weight: bold;\n}\n.comment-box-input[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    outline: none;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    text-indent: 8px;\n    display: inline-block;\n    border: 1px solid var(--color-default);\n    border-radius: var(--border-radius);\n    font-family: var(--font-family-text);\n    font-size: var(--font-size-text);\n    color: var(--color-black);\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    resize: none;\n}\n.place-comment-button[_ngcontent-%COMP%] {\n    height: 30%;\n    width: 30%;\n    float: right;\n    border-radius: var(--border-radius);\n    border: none;\n}\n.user-comments-box-title[_ngcontent-%COMP%] {\n    font-weight: bold;\n    margin-left: .5rem;\n}\n.user-comments-box[_ngcontent-%COMP%] {\n    float: right;\n    width: 100%;\n    height: 100%;\n    border: 1px solid var(--color-default);\n    border-radius: var(--border-radius);\n}\n.user-comments-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    padding-left: 1rem;\n    opacity: .5;\n}\n@media only screen and (max-width: 48em){\n    .right-side-grid[_ngcontent-%COMP%]{\n        grid-template-columns: 1fr;\n    }\n    .left-sid-grid[_ngcontent-%COMP%]{\n        grid-template-columns: 1fr;\n    }\n    .left-sid-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-of-type(1){\n        order: 1;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY3Rpdml0eXBhZ2VzL2FjdGl2aXR5d2FuZGVsZW4vYWN0aXZpdHl3YW5kZWxlbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYjt3QkFDb0Q7SUFDcEQsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxtQ0FBbUM7QUFDdkM7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUNBQW1DOztBQUV2QztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUNBQW1DO0FBQ3ZDO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6Qiw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsbUNBQW1DO0FBQ3ZDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSTtRQUNJLDBCQUEwQjtJQUM5QjtJQUNBO1FBQ0ksMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSxRQUFRO0lBQ1o7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWN0aXZpdHlwYWdlcy9hY3Rpdml0eXdhbmRlbGVuL2FjdGl2aXR5d2FuZGVsZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItLWdyaWR7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAyZnI7XG59XG4ucmlnaHQtc2lkZS1ncmlke1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtZ2FwOiAycmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5sZWZ0LXNpZC1ncmlke1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtZ2FwOiAycmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbmhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDIyMCwyMjAsMjIwLDAuNykgMCUscmdiYSgyMjAsMjIwLDIyMCwwLjcpIDEwMCUpLFxuICAgIHVybChcInNyYy9hc3NldHMvSW1hZ2VzL2FjdGl2aXR5SW1hZ2Uvd2FuZGVsaW5nLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDcwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAyMHB4IHdoaXRlO1xufVxuXG4uYWN0aXZpdHktaW1hZ2UtYm94IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLmFjdGl2aXR5LWltYWdlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG5cbn1cblxuLmFjdGl2aXR5LWRlc2NyaXB0aW9uLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tbGVmdDogLjVyZW07XG59XG5cbi5hY3Rpdml0eS1kZXNjcmlwdGlvbiBwe1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBvcGFjaXR5OiAuNTtcbn1cbi5hY3Rpdml0eS1kZXNjcmlwdGlvbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItZGVmYXVsdCk7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xufVxuXG4uY29tbWVudC1ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbW1lbnQtYm94LXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbW1lbnQtYm94LWlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB0ZXh0LWluZGVudDogOHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1kZWZhdWx0KTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktdGV4dCk7XG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUtdGV4dCk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuLnBsYWNlLWNvbW1lbnQtYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDMwJTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi51c2VyLWNvbW1lbnRzLWJveC10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xufVxuXG4udXNlci1jb21tZW50cy1ib3gge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItZGVmYXVsdCk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG4udXNlci1jb21tZW50cy1ib3ggcHtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgb3BhY2l0eTogLjU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4ZW0pe1xuICAgIC5yaWdodC1zaWRlLWdyaWR7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbiAgICAubGVmdC1zaWQtZ3JpZHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgfVxuICAgIC5sZWZ0LXNpZC1ncmlkICA+IGRpdjpudGgtb2YtdHlwZSgxKXtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActivitywandelenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-activitywandelen',
                templateUrl: './activitywandelen.component.html',
                styleUrls: ['./activitywandelen.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iwmz":
/*!***************************************************************************!*\
  !*** ./src/app/components/speech-voice-service/speech-service.service.ts ***!
  \***************************************************************************/
/*! exports provided: SpeechServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechServiceService", function() { return SpeechServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var annyang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! annyang */ "RLqe");
/* harmony import */ var annyang__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(annyang__WEBPACK_IMPORTED_MODULE_2__);





class SpeechServiceService {
    constructor(ngZone, router, injector) {
        this.ngZone = ngZone;
        this.router = router;
        this.injector = injector;
        this.title = 'angularSpeechRecognition';
        this.phrases = [];
        this.languages = ['nl-NL'];
        this.isListening = false;
        this.introduced = false;
        this.synthesis = window.speechSynthesis;
        this.utterance = new SpeechSynthesisUtterance("Dagje uit");
        this.utterance.lang = 'nl-NL';
        if (!this.introduced) {
            console.log("Jaaa");
            this.speak("Hello mijn naam is dagje uit, om te navigeren in de applicatie of om de kleuren " +
                "te wijzigen, kunt u gebruik maken van de spraak functie links bovenin");
            this.introduced = true;
        }
    }
    /**
     * When clicking on the mic, fire up this method
     */
    startListening() {
        this.isListening = true;
        annyang__WEBPACK_IMPORTED_MODULE_2__["addCallback"]('result', phrases => {
            this.printUsersSaying(phrases);
        });
        annyang__WEBPACK_IMPORTED_MODULE_2__["start"]();
    }
    /**
     * Once the user stop talking stop listening and give the said phrases back
     * @param whatTheUserHasSaid
     * @private
     */
    printUsersSaying(whatTheUserHasSaid) {
        this.isListening = false;
        this.ngZone.run(() => {
            this.phrases = whatTheUserHasSaid;
        });
        let command = this.checkPhrase(this.phrases);
        console.log('I think the user said: ' + command);
        if (command !== "") {
            this.reactOnSpeech(command);
            annyang__WEBPACK_IMPORTED_MODULE_2__["abort"]();
        }
    }
    /**
     * loop through the letters and check if there is a word among that refers to do something
     * @param array
     * @private
     */
    checkPhrase(array) {
        for (let i = 0; i < array.length; i++) {
            let word = array[i];
            let foundWord = "";
            if (word.length > 0 && word.indexOf(" ") > -1) {
                let arrayOfWords = word.split(" ");
                for (let j = 0; arrayOfWords.length; j++) {
                    foundWord = this.checkWordsInSentence(arrayOfWords[j]);
                    if (foundWord !== "") {
                        return foundWord;
                    }
                }
            }
            else {
                foundWord = this.checkWordsInSentence(word);
                if (foundWord !== "") {
                    return foundWord;
                }
            }
        }
        return "";
    }
    /**
     * if a certain index of the returned array consists of more than one word,
     * then we need to loop through the characters of that
     * word to check if these characters kind of a command
     * @param word
     * @private
     */
    checkWordsInSentence(word) {
        try {
            let letters = "";
            let foundWord = "";
            for (let j = 0; j < word.length; j++) {
                letters += word[j];
                foundWord = this.isWordACommand(letters);
                if (foundWord !== "") {
                    return foundWord;
                }
            }
            return "";
        }
        catch (err) {
        }
    }
    /**
     * To check if a certain word a command of the user
     * @param text
     * @private
     */
    isWordACommand(text) {
        if (text === 'homepagina' || text === 'home') {
            return "home";
        }
        else if (text.toLowerCase() === 'activiteiten pagina' || text.toLowerCase() === 'activiteiten') {
            return "activiteiten";
        }
        else if (text === "registratiepagina" || text.toLowerCase() === "registratie") {
            return "registratie";
        }
        else if (text.toLowerCase() === "loginpagina" || text.toLowerCase() === "login" || text.toLowerCase() === "inlog") {
            return "login";
        }
        else if (text.toLowerCase() === "zwart") {
            return "zwart";
        }
        else if (text.toLowerCase() === "rood" || text.toLowerCase() === "rode") {
            return "rood";
        }
        else if (text.toLowerCase() === "groen") {
            return "groen";
        }
        else if (text.toLowerCase() === "geel" || text.toLowerCase() === "gele") {
            return "geel";
        }
        else if (text.toLowerCase() === "blauw") {
            return "blauw";
        }
        else if (text.toLowerCase() === "profielpagina" || text.toLowerCase() === "profiel") {
            return "profile";
        }
        else {
            return "";
        }
    }
    /**
     * To switch between the page depending on what the user said
     * @param text
     * @private
     */
    reactOnSpeech(text) {
        const routerService = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]);
        const ngZone = this.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]);
        if (text === 'homepagina' || text === 'home') {
            this.speak("U bent op de homepagina");
            ngZone.run(() => {
                routerService.navigate(['/home']);
            });
        }
        else if (text === 'activiteiten pagina' || text === 'activiteiten') {
            this.speak("U bent op de activitetienpagina");
            ngZone.run(() => {
                routerService.navigate(['/activities']);
            });
        }
        else if (text === "registratiepagina" || text === "registratie") {
            this.speak("U bent op de registratiepagina");
            ngZone.run(() => {
                routerService.navigate(['/register']);
            });
        }
        else if (text === "loginpagina" || text === "login") {
            this.speak("U bent op de login pagina");
            ngZone.run(() => {
                // routerService.navigate(['/login'], { skipLocationChange: true });
                routerService.navigate(['/login']);
            });
        }
        else if (text === "profile") {
            this.speak("U bent op de profiel pagina");
            ngZone.run(() => {
                // routerService.navigate(['/login'], { skipLocationChange: true });
                routerService.navigate(['/profile']);
            });
        }
        else if (text === "zwart") {
            document.documentElement.style.setProperty('--color-default', 'black');
            this.speak("De kleur zwart is geactiveerd");
        }
        else if (text === "rood") {
            document.documentElement.style.setProperty('--color-default', 'red');
            this.speak("De kleur rood is geactiveerd");
        }
        else if (text === "groen") {
            document.documentElement.style.setProperty('--color-default', 'green');
            this.speak("De kleur groen is geactiveerd");
        }
        else if (text === "geel") {
            document.documentElement.style.setProperty('--color-default', 'yellow');
            this.speak("De kleur geel is geactiveerd");
        }
        else if (text === "blauw") {
            document.documentElement.style.setProperty('--color-default', 'blue');
            this.speak("De kleur blauw is geactiveerd");
        }
        else {
            this.speak("Ik begrijp niet helemaal wat u bedoelt");
        }
    }
    /**
     * To say something to the user based on the message
     * @param message
     */
    speak(message) {
        if (message === this.previousMessage)
            return;
        // const englishLanguage = "'en-US'";
        this.utterance.text = message;
        this.previousMessage = message;
        this.synthesis.speak(this.utterance);
        // this.synthesis.cancel();
    }
}
SpeechServiceService.ɵfac = function SpeechServiceService_Factory(t) { return new (t || SpeechServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
SpeechServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpeechServiceService, factory: SpeechServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpeechServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "mfBl":
/*!*********************************************************************!*\
  !*** ./src/app/components/about-us-page/about-us-page.component.ts ***!
  \*********************************************************************/
/*! exports provided: AboutUsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsPageComponent", function() { return AboutUsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutUsPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutUsPageComponent.ɵfac = function AboutUsPageComponent_Factory(t) { return new (t || AboutUsPageComponent)(); };
AboutUsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsPageComponent, selectors: [["app-about-us-page"]], decls: 7, vars: 0, consts: [[1, "aboutUs"], [1, "inner-container"], [1, "text"]], template: function AboutUsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%]{\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n\nbody[_ngcontent-%COMP%]{\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--color-white-smoke);\n}\n\n\n.aboutUs[_ngcontent-%COMP%]{\n  background-size: 55%;\n  background: var(--color-white-smoke) url('pic.jpg') no-repeat left;\n  overflow: hidden;\n  padding: 100px 0;\n}\n\n\n.inner-container[_ngcontent-%COMP%]{\n  width: 55%;\n  float: right;\n  background-color: var(--color-white-smoke);\n  padding: 150px;\n}\n\n\n.inner-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  margin-bottom: 30px;\n  font-size: 30px;\n  font-weight: 900;\n}\n\n\n@media screen and (max-width:1200px){\n  .inner-container[_ngcontent-%COMP%]{\n    padding: 80px;\n  }\n}\n\n\n@media screen and (max-width:1000px){\n  .aboutUs[_ngcontent-%COMP%]{\n    background-size: 100%;\n    padding: 100px 40px;\n  }\n  .inner-container[_ngcontent-%COMP%]{\n    width: 100%;\n  }\n}\n\n\n@media screen and (max-width:600px){\n  .aboutUs[_ngcontent-%COMP%]{\n    padding: 0;\n  }\n  .inner-container[_ngcontent-%COMP%]{\n    padding: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC11cy1wYWdlL2Fib3V0LXVzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOzs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QiwwQ0FBMEM7QUFDNUM7OztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtFQUF5RjtFQUN6RixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOzs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osMENBQTBDO0VBQzFDLGNBQWM7QUFDaEI7OztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGOzs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtdXMtcGFnZS9hYm91dC11cy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cblxuYm9keXtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZS1zbW9rZSk7XG59XG5cbi5hYm91dFVze1xuICBiYWNrZ3JvdW5kLXNpemU6IDU1JTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itd2hpdGUtc21va2UpIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9JbWFnZXMvcGljLmpwZ1wiKSBuby1yZXBlYXQgbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMTAwcHggMDtcbn1cblxuLmlubmVyLWNvbnRhaW5lcntcbiAgd2lkdGg6IDU1JTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci13aGl0ZS1zbW9rZSk7XG4gIHBhZGRpbmc6IDE1MHB4O1xufVxuXG4uaW5uZXItY29udGFpbmVyIGgxe1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTIwMHB4KXtcbiAgLmlubmVyLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nOiA4MHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAwMHB4KXtcbiAgLmFib3V0VXN7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwMHB4IDQwcHg7XG4gIH1cbiAgLmlubmVyLWNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KXtcbiAgLmFib3V0VXN7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAuaW5uZXItY29udGFpbmVye1xuICAgIHBhZGRpbmc6IDYwcHg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us-page',
                templateUrl: './about-us-page.component.html',
                styleUrls: ['./about-us-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_mainpage_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/mainpage/register/register.component */ "ZYUz");
/* harmony import */ var _components_mainpage_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/mainpage/login/login.component */ "+m7b");
/* harmony import */ var _components_activitypages_activitywandelen_activitywandelen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/activitypages/activitywandelen/activitywandelen.component */ "eYX5");
/* harmony import */ var _components_categorypage_categorypage_categorypage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/categorypage/categorypage/categorypage.component */ "QIBy");
/* harmony import */ var _components_HomePage_activities_home_page_activities_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/HomePage/activities-home-page/activities-home-page.component */ "3fzt");
/* harmony import */ var _components_activityOverview_activity_overview_activity_overview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/activityOverview/activity-overview/activity-overview.component */ "K0BM");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/profile/profile.component */ "DZ0t");
/* harmony import */ var _components_about_us_page_about_us_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about-us-page/about-us-page.component */ "mfBl");












const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_HomePage_activities_home_page_activities_home_page_component__WEBPACK_IMPORTED_MODULE_6__["ActivitiesHomePageComponent"] },
    { path: 'login', component: _components_mainpage_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _components_mainpage_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'activities', component: _components_activitypages_activitywandelen_activitywandelen_component__WEBPACK_IMPORTED_MODULE_4__["ActivitywandelenComponent"] },
    { path: 'category', component: _components_categorypage_categorypage_categorypage_component__WEBPACK_IMPORTED_MODULE_5__["CategorypageComponent"] },
    { path: 'activityoverview', component: _components_activityOverview_activity_overview_activity_overview_component__WEBPACK_IMPORTED_MODULE_7__["ActivityOverviewComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"] },
    { path: 'aboutUs', component: _components_about_us_page_about_us_page_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsPageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "w5cE":
/*!**************************************************************************************!*\
  !*** ./src/app/components/HomePage/search-home-page/zoekbalk-home-page.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ZoekbalkHomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoekbalkHomePageComponent", function() { return ZoekbalkHomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





class ZoekbalkHomePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ZoekbalkHomePageComponent.ɵfac = function ZoekbalkHomePageComponent_Factory(t) { return new (t || ZoekbalkHomePageComponent)(); };
ZoekbalkHomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZoekbalkHomePageComponent, selectors: [["app-zoekbalk-home-page"]], decls: 44, vars: 0, consts: [[1, "container-fluid"], ["role", "form", 1, "form-inline"], [1, "form-control", "form-control-lg", 2, "padding-right", "3rem"], ["id", "categorie\u00EBn", "placeholder", "Categorie\u00EBn"], ["routerLink", "/category"], ["id", "eigenschap", "placeholder", "Eigenschap"], ["id", "provincies", "placeholder", "Provincie"], ["for", "example-date-input"], ["type", "date", "id", "example-date-input", 1, "form-control", "form-control-lg"], [1, "searchBar"], [1, "input-group"], ["type", "text", "placeholder", "Search", 1, "form-control", 2, "height", "3rem"], [1, "input-group-append"], ["type", "button", 1, "btn", "text-white"]], template: function ZoekbalkHomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Categorie 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Herfst");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Categorie 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Categorie 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Eigenschap 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Eigenschap 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Eigenschap 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Eigenschap 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Provincie 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Provincie 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Provincie 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Provincie 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".container-fluid[_ngcontent-%COMP%]{\n  background-color: var(--color-default);\n  padding: 1rem;\n}\n\n\n.form-inline[_ngcontent-%COMP%]{\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n}\n\n\n.searchBar[_ngcontent-%COMP%]{\n  width: 50%;\n  margin: 25px auto;\n}\n\n\n@media screen  and (max-width: 850px){\n  .form-inline[_ngcontent-%COMP%]{\n    flex-direction: column;\n  }\n\n  label[_ngcontent-%COMP%] {\n    padding-top: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9Ib21lUGFnZS9zZWFyY2gtaG9tZS1wYWdlL3pvZWtiYWxrLWhvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQXNDO0VBQ3RDLGFBQWE7QUFDZjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COzs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL0hvbWVQYWdlL3NlYXJjaC1ob21lLXBhZ2Uvem9la2JhbGstaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kZWZhdWx0KTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuXG4uZm9ybS1pbmxpbmV7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5zZWFyY2hCYXJ7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMjVweCBhdXRvO1xufVxuXG5AbWVkaWEgc2NyZWVuICBhbmQgKG1heC13aWR0aDogODUwcHgpe1xuICAuZm9ybS1pbmxpbmV7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIGxhYmVsIHtcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZoekbalkHomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-zoekbalk-home-page',
                templateUrl: './zoekbalk-home-page.component.html',
                styleUrls: ['./zoekbalk-home-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zfcM":
/*!****************************************************************!*\
  !*** ./src/app/components/mainpage/header/header.component.ts ***!
  \****************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
    constructor() {
        this.logoImage = '';
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 7, vars: 0, consts: [[1, "img-responsive", 2, "background-image", "url('../../../../assets/Images/headerImage.jpeg')"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Speciale activiteiten,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Alleen voor u!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["header[_ngcontent-%COMP%]{\n    margin: 0;\n    display: grid;\n    grid-template-columns: 1fr 80% 1fr;\n    align-items: center;\n    min-height: 250px;\n    background-repeat: no-repeat;\n    background-size:cover;\n    background-position: bottom;\n}\n\nheader[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{\n    text-shadow: 2px 2px 3px var(--color-black);\n    color: var(--white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWlucGFnZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbnBhZ2UvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDgwJSAxZnI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG59XG5cbmhlYWRlciAqe1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDNweCB2YXIoLS1jb2xvci1ibGFjayk7XG4gICAgY29sb3I6IHZhcigtLXdoaXRlKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map