import { Component, Input } from '@angular/core';
import Recette from 'src/app/models/recette.model';

@Component({
  selector: 'app-list-ustensile',
  templateUrl: './list-ustensile.component.html',
  styleUrls: ['./list-ustensile.component.scss']
})
export class ListUstensileComponent {

  @Input()
  recette!: Recette


}
