import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIngredientRecetteComponent } from './list-ingredient-recette.component';

describe('ListIngredientRecetteComponent', () => {
  let component: ListIngredientRecetteComponent;
  let fixture: ComponentFixture<ListIngredientRecetteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListIngredientRecetteComponent]
    });
    fixture = TestBed.createComponent(ListIngredientRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
