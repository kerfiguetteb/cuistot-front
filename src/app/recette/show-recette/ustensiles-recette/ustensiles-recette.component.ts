import { Component, Input } from '@angular/core';
import Recette from 'src/app/models/recette.model';

@Component({
  selector: 'app-ustensiles-recette',
  templateUrl: './ustensiles-recette.component.html',
  styleUrls: ['./ustensiles-recette.component.scss']
})
export class UstensilesRecetteComponent {

  @Input()
  ustensiles!: []

  @Input()
  recette!: Recette

}
