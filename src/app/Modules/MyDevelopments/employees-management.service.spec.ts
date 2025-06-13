import { TestBed } from '@angular/core/testing';

import { EmployeesManagementService } from './employees-management.service';

describe('EmployeesManagementService', () => {
  let service: EmployeesManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
