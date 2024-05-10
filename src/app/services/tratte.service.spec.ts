import { TestBed } from '@angular/core/testing';

import { TratteService } from './tratte.service';

describe('TratteService', () => {
  let service: TratteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TratteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
