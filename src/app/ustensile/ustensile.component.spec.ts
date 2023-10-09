import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UstensileComponent } from './ustensile.component';

describe('UstensileComponent', () => {
  let component: UstensileComponent;
  let fixture: ComponentFixture<UstensileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UstensileComponent]
    });
    fixture = TestBed.createComponent(UstensileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
