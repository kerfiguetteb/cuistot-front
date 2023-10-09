import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUstensileComponent } from './add-ustensile.component';

describe('AddUstensileComponent', () => {
  let component: AddUstensileComponent;
  let fixture: ComponentFixture<AddUstensileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddUstensileComponent]
    });
    fixture = TestBed.createComponent(AddUstensileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
