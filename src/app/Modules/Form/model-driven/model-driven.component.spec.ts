import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDrivenComponent } from './model-driven.component';

describe('ModelDrivenComponent', () => {
  let component: ModelDrivenComponent;
  let fixture: ComponentFixture<ModelDrivenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelDrivenComponent]
    });
    fixture = TestBed.createComponent(ModelDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
