import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RegisterComponent} from './register.component';


describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have form', () => {
    let fixture = TestBed.createComponent(RegisterComponent);
    let compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    expect(compiled.querySelector('form'))
  });

  /**
   * This is how to inject the service in the test
   */
  // it('should have service', () => {
  //   let fixture = TestBed.createComponent(RegisterComponent);
  //   let registerComponent = fixture.debugElement.nativeElement;
  //   //Injecting the service
  //   // let service = fixture.debugElement.injector.get("Here we put the service that we want to inejct")
  //
  //   //For example we test the object of registerComponent if it has the same value as in the service
  //   // expect(service.user.name).toEqual(registerComponent.user.name);
  //   //Dont forget to detectChanges for updating
  //   // fixture.detectChanges();
  //
  //   expect(registerComponent.querySelector('form'))
  // });

  /**
   * Check the length of the input fields
   */
  it('Check input fields length should be 10', () => {
    let fixture = TestBed.createComponent(RegisterComponent);
    let compiled = fixture.debugElement.nativeElement;
    let inputFields = Array.from(compiled.querySelector('#input-fields-user-information').querySelectorAll('input')).map(()=>{

    })
    fixture.detectChanges();
    expect(inputFields.length === 10).toBeTrue();

  });

  /**
   * Check the length of the interests labels s
   */
  it('Should have 7 labels for interests', () => {
    let fixture = TestBed.createComponent(RegisterComponent);
    let compiled = fixture.debugElement.nativeElement;

    const labels = Array.from(compiled.querySelector('#pictures-section').querySelectorAll('label')).map((label)=>{
    });
    fixture.detectChanges();
    expect(labels.length === 7).toBeTrue();
  });

  /**
   * Check interests ons they're clicked
   */
  it('Check clicked interests', () => {
    let fixture = TestBed.createComponent(RegisterComponent);
    let compiled = fixture.debugElement.nativeElement;
    let strand = compiled.querySelector('#strand')
    let winterSport = compiled.querySelector('#wintersport')
    winterSport.click();
    strand.click();
    fixture.detectChanges();
    expect(compiled.querySelector('#strand').checked)
    expect(compiled.querySelector('#wintersport').checked)
  });

});
