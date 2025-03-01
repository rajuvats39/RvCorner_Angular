import { TestBed } from '@angular/core/testing';

import { ModelPopupService } from './model-popup.service';

describe('ModelPopupService', () => {
  let service: ModelPopupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModelPopupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
