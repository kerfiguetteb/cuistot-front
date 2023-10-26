import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUstensileComponent } from './card-ustensile.component';

describe('CardUstensileComponent', () => {
  let component: CardUstensileComponent;
  let fixture: ComponentFixture<CardUstensileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardUstensileComponent]
    });
    fixture = TestBed.createComponent(CardUstensileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
