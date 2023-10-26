import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUstensileComponent } from './list-ustensile.component';

describe('ListUstensileComponent', () => {
  let component: ListUstensileComponent;
  let fixture: ComponentFixture<ListUstensileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListUstensileComponent]
    });
    fixture = TestBed.createComponent(ListUstensileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
