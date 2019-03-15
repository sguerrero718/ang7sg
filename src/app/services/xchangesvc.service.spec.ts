import { TestBed } from '@angular/core/testing';

import { XchangesvcService } from './xchangesvc.service';

describe('XchangesvcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XchangesvcService = TestBed.get(XchangesvcService);
    expect(service).toBeTruthy();
  });
});
