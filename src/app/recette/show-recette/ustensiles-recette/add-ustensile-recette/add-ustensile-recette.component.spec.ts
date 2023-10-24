import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUstensileRecetteComponent } from './add-ustensile-recette.component';

describe('AddUstensileRecetteComponent', () => {
  let component: AddUstensileRecetteComponent;
  let fixture: ComponentFixture<AddUstensileRecetteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUstensileRecetteComponent]
    });
    fixture = TestBed.createComponent(AddUstensileRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
