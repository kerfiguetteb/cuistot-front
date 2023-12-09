import { Component, EventEmitter, Input, Output } from '@angular/core';
import IngredientQuantite from 'src/app/models/ingredientQuantite.model';
import Ustensile from 'src/app/models/ustensile.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input()
  objects!: any

  @Input()
  detail!: string

  @Output()
  onObjects: EventEmitter<any> = new EventEmitter()

  public event(element: IngredientQuantite | Ustensile): void
  {
    this.onObjects.emit(element)    
  }
}
