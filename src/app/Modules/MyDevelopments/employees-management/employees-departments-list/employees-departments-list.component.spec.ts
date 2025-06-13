import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesDepartmentsListComponent } from './employees-departments-list';

describe('EmployeesDepartmentsListComponent', () => {
  let component: EmployeesDepartmentsListComponent;
  let fixture: ComponentFixture<EmployeesDepartmentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeesDepartmentsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesDepartmentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
