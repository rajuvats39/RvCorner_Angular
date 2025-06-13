import { TestBed } from '@angular/core/testing';

import { BlogAppService } from './blog-app.service';

describe('BlogAppService', () => {
  let service: BlogAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
