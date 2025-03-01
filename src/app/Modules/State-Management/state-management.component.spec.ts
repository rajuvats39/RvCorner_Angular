import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateManagementComponent } from './state-management.component';

describe('StateManagementsComponent', () => {
  let component: StateManagementComponent;
  let fixture: ComponentFixture<StateManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StateManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
