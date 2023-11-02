import { Component, Input } from '@angular/core';
import Recette from 'src/app/models/recette.model';

@Component({
  selector: 'app-ustensiles',
  templateUrl: './ustensiles.component.html',
  styleUrls: ['./ustensiles.component.scss']
})
export class UstensilesComponent {

  @Input()
  recette!: Recette

}
