import { TestBed } from '@angular/core/testing';

import { TypeImpotService } from './type-impot.service';

describe('TypeImpotService', () => {
  let service: TypeImpotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeImpotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
