import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderMDFComponent } from './form-builder-mdf.component';

describe('FormBuilderMDFComponent', () => {
  let component: FormBuilderMDFComponent;
  let fixture: ComponentFixture<FormBuilderMDFComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBuilderMDFComponent]
    });
    fixture = TestBed.createComponent(FormBuilderMDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
