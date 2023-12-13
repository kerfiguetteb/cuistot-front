import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRecetteTypeComponent } from './table-recette-type.component';

describe('TableRecetteTypeComponent', () => {
  let component: TableRecetteTypeComponent;
  let fixture: ComponentFixture<TableRecetteTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableRecetteTypeComponent]
    });
    fixture = TestBed.createComponent(TableRecetteTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
