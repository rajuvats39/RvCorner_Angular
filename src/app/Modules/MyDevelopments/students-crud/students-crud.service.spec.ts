import { TestBed } from '@angular/core/testing';

import { StudentsCrudService } from './students-crud.service';

describe('StudentsCrudService', () => {
  let service: StudentsCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
