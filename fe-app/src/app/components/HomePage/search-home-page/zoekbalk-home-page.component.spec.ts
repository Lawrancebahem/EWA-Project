import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoekbalkHomePageComponent } from './zoekbalk-home-page.component';

describe('ZoekbalkHomePageComponent', () => {
  let component: ZoekbalkHomePageComponent;
  let fixture: ComponentFixture<ZoekbalkHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoekbalkHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoekbalkHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
