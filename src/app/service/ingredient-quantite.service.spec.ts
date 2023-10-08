import { TestBed } from '@angular/core/testing';

import { IngredientQuantiteService } from './ingredient-quantite.service';

describe('IngredientQuantiteService', () => {
  let service: IngredientQuantiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngredientQuantiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
