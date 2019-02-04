import { TestBed } from '@angular/core/testing';

import { LocalgovernmentServiceService } from './localgovernment-service.service';

describe('LocalgovernmentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalgovernmentServiceService = TestBed.get(LocalgovernmentServiceService);
    expect(service).toBeTruthy();
  });
});
