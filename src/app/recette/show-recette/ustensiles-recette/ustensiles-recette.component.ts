import { Component, Input } from '@angular/core';
import { UstensileService } from 'src/app/service/ustensile.service';

@Component({
  selector: 'app-ustensiles-recette',
  templateUrl: './ustensiles-recette.component.html',
  styleUrls: ['./ustensiles-recette.component.scss']
})
export class UstensilesRecetteComponent {

  constructor( private ustensileService: UstensileService ){}

  @Input()
  ustensiles!: []

}
