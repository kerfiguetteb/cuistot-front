import { Component, Input } from '@angular/core';
import Recette from 'src/app/models/recette.model';
import Ustensile from 'src/app/models/ustensile.model';
import { RecetteService } from 'src/app/service/recette.service';

@Component({
  selector: 'app-card-ustensile',
  templateUrl: './card-ustensile.component.html',
  styleUrls: ['./card-ustensile.component.scss']
})
export class CardUstensileComponent {

  constructor(private recetteService: RecetteService  ){ }

  @Input()
  recette!: Recette

  public remove(ustensile: Ustensile) : void
  {
     const ustensileFilter = this.recette.ustensiles.filter((object => object.id !== ustensile.id))
     this.recette.ustensiles = ustensileFilter
     this.updateRecette()
    }

   private updateRecette(): void
    {
      this.recetteService.updateRecette(this.recette).subscribe()
    }
 
}
