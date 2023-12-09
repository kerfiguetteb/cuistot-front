import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarVisiteurComponent } from './navbar-visiteur.component';

describe('NavbarVisiteurComponent', () => {
  let component: NavbarVisiteurComponent;
  let fixture: ComponentFixture<NavbarVisiteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarVisiteurComponent]
    });
    fixture = TestBed.createComponent(NavbarVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
