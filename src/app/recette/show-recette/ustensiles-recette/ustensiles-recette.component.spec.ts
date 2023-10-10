import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UstensilesRecetteComponent } from './ustensiles-recette.component';

describe('UstensilesRecetteComponent', () => {
  let component: UstensilesRecetteComponent;
  let fixture: ComponentFixture<UstensilesRecetteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UstensilesRecetteComponent]
    });
    fixture = TestBed.createComponent(UstensilesRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
