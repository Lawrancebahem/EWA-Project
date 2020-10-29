import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesHomePageComponent } from './activities-home-page.component';

describe('ActivitiesHomePageComponent', () => {
  let component: ActivitiesHomePageComponent;
  let fixture: ComponentFixture<ActivitiesHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
