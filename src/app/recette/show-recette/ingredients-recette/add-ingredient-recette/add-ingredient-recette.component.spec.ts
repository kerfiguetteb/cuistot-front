import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngredientRecetteComponent } from './add-ingredient-recette.component';

describe('AddIngredientRecetteComponent', () => {
  let component: AddIngredientRecetteComponent;
  let fixture: ComponentFixture<AddIngredientRecetteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddIngredientRecetteComponent]
    });
    fixture = TestBed.createComponent(AddIngredientRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
