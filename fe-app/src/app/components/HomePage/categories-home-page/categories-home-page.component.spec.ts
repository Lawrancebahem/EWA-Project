import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesHomePageComponent } from './categories-home-page.component';

describe('ActivitiesHomePageComponent', () => {
  let component: CategoriesHomePageComponent;
  let fixture: ComponentFixture<CategoriesHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
