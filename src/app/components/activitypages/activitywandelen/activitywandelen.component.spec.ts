import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitywandelenComponent } from './activitywandelen.component';

describe('ActivitywandelenComponent', () => {
  let component: ActivitywandelenComponent;
  let fixture: ComponentFixture<ActivitywandelenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitywandelenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitywandelenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
