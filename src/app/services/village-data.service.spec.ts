import { TestBed } from '@angular/core/testing';

import { VillageDataService } from './village-data.service';

describe('VillageDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VillageDataService = TestBed.get(VillageDataService);
    expect(service).toBeTruthy();
  });
});
