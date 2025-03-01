import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingsComponent } from './data-bindings.component';

describe('DataBindingsComponent', () => {
  let component: DataBindingsComponent;
  let fixture: ComponentFixture<DataBindingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataBindingsComponent]
    });
    fixture = TestBed.createComponent(DataBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
