import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIngredientComponent } from './card-ingredient.component';

describe('CardIngredientComponent', () => {
  let component: CardIngredientComponent;
  let fixture: ComponentFixture<CardIngredientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardIngredientComponent]
    });
    fixture = TestBed.createComponent(CardIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
