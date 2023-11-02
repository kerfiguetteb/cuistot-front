import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UstensilesComponent } from './ustensiles.component';

describe('UstensilesComponent', () => {
  let component: UstensilesComponent;
  let fixture: ComponentFixture<UstensilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UstensilesComponent]
    });
    fixture = TestBed.createComponent(UstensilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
