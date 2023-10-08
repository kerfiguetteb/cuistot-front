import { TestBed } from '@angular/core/testing';

import { UstensileService } from './ustensile.service';

describe('UstensileService', () => {
  let service: UstensileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UstensileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
