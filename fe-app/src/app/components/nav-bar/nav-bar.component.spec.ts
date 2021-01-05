import { ComponentFixture, TestBed } from '@angular/core/testing';
import {NavBarComponent} from './nav-bar.component';
import {RouterModule} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";


describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let componentHtml: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],
      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    componentHtml = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(componentHtml).toBeTruthy();
  });


  /**
   * @Author Moustafa
   */
  it('should display original title', () => {
    componentHtml = fixture.nativeElement.querySelector('h2')
    expect(componentHtml.textContent).toEqual('Dagje uit')
  });

  /**
   * @Author Moustafa
   */
  it('should display the expected text', function () {
    componentHtml = fixture.nativeElement.querySelector('#contactUs')
    expect(componentHtml.textContent).toEqual('Contact')
  });


  // it('should redirect to the contact page', function () {
  //
  //   element(by.id('contactUs')).click().then(function () { // first find list-home a tag and than click
  //     browser.sleep(1000).then(function () {
  //       browser.getCurrentUrl().then(function (url) { // promise
  //         expect(url.indexOf('contactUs') !== -1).toBeTruthy(); // check the current url is list
  //       });
  //     });
  //
  //   });
  //
  // });

});
