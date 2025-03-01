import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlMDFComponent } from './form-control-mdf.component';

describe('FormControlMDFComponent', () => {
  let component: FormControlMDFComponent;
  let fixture: ComponentFixture<FormControlMDFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormControlMDFComponent]
    });
    fixture = TestBed.createComponent(FormControlMDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
