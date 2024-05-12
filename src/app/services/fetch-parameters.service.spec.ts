import { TestBed } from '@angular/core/testing';

import { FetchParametersService } from './fetch-parameters.service';

describe('FetchParametersService', () => {
  let service: FetchParametersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchParametersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
