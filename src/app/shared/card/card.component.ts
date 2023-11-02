import { Component, EventEmitter, Input, Output } from '@angular/core';
import Recette from 'src/app/models/recette.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input()
  object!: Recette

  @Input()
  detail!: string

  @Output()
  onObject: EventEmitter<any> = new EventEmitter()

  /**
   * ecouteur d'evenement qui envoi l'objet au parent
   * @param element 
   */
  public event(element: any): void
  {
    this.onObject.emit(element)

  }

}
