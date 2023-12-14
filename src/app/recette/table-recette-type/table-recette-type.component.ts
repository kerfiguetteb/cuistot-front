import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Recette from 'src/app/models/recette.model';

@Component({
  selector: 'app-table-recette-type',
  templateUrl: './table-recette-type.component.html',
  styleUrls: ['./table-recette-type.component.scss']
})
export class TableRecetteTypeComponent {

  @Input()
  recettes!:Recette[]

  @Output()
  onRecette: EventEmitter<Recette> = new EventEmitter()


  remove(recette: Recette){
    this.onRecette.emit(recette)
  }


  form = {
    search: ''
  }





}
