import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterModule} from "@angular/router";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientTestingModule, RouterModule.forRoot([]),FormsModule, ReactiveFormsModule],

      declarations: [
        AppComponent,NavBarComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA],

    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'Digital-Life'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   fixture.detectChanges();
  //   expect(app.title).toEqual('Digital-Life');
  // });
  //
  // // it('should render title', () => {
  // //   const fixture = TestBed.createComponent(AppComponent);
  // //   fixture.detectChanges();
  // //   const compiled = fixture.nativeElement;
  // //   expect(compiled.querySelector('.content span').textContent).toContain('Digital-Life app is running!');
  // // });
});
