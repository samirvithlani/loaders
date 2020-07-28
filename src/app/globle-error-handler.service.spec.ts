import { TestBed } from '@angular/core/testing';

import { GlobleErrorHandlerService } from './globle-error-handler.service';

describe('GlobleErrorHandlerService', () => {
  let service: GlobleErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobleErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
