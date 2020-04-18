import { TestBed } from '@angular/core/testing';

import { ReasonGenService } from './reason-gen.service';

describe('ReasonGenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReasonGenService = TestBed.get(ReasonGenService);
    expect(service).toBeTruthy();
  });
});
