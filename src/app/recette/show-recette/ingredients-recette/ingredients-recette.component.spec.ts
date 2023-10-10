import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsRecetteComponent } from './ingredients-recette.component';

describe('IngredientsRecetteComponent', () => {
  let component: IngredientsRecetteComponent;
  let fixture: ComponentFixture<IngredientsRecetteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientsRecetteComponent]
    });
    fixture = TestBed.createComponent(IngredientsRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
