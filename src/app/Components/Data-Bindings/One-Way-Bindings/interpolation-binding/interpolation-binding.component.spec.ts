import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationBindingComponent } from './interpolation-binding.component';

describe('InterpolationBindingComponent', () => {
  let component: InterpolationBindingComponent;
  let fixture: ComponentFixture<InterpolationBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterpolationBindingComponent]
    });
    fixture = TestBed.createComponent(InterpolationBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
