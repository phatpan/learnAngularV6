import { TestBed, inject } from '@angular/core/testing';

import { BnkService } from './bnk.service';

describe('BnkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BnkService]
    });
  });

  it('should be created', inject([BnkService], (service: BnkService) => {
    expect(service).toBeTruthy();
  }));
});
