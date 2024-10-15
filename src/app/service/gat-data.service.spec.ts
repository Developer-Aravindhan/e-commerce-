import { TestBed } from '@angular/core/testing';

import { GatDataService } from './gat-data.service';

describe('GatDataService', () => {
  let service: GatDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GatDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
