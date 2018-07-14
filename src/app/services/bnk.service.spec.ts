import { TestBed, inject } from '@angular/core/testing';

import { BnkService } from './bnk.service';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';

describe('BnkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BnkService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([BnkService], (service: BnkService) => {
    expect(service).toBeTruthy();
  }));
});
