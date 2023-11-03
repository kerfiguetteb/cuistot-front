import { Component, EventEmitter, Input, Output } from '@angular/core';
import Recette from 'src/app/models/recette.model';
import Ustensile from 'src/app/models/ustensile.model';
import { UstensileService } from 'src/app/service/ustensile.service';

@Component({
  selector: 'app-list-ustensile',
  templateUrl: './list-ustensile.component.html',
  styleUrls: ['./list-ustensile.component.scss']
})
export class ListUstensileComponent {

  constructor(private ustensileService: UstensileService) {}

  @Input()
  ustensiles!: Ustensile[]

  @Input()
  recette!: Recette


  public filterUstensile(){
    console.log(this.recette);
    
  }
  public add(element: Ustensile): void
  {
    this.recette.ustensiles.push(element)
    console.log(this.ustensiles);
    console.log(this.recette.ustensiles);
    this.filterUstensile()
    
    
    
  }

  public remove(element: Ustensile): void 
  {    
  }


    /**
   * Recuperation de l'ustensile du formulaire
   * @param ustensile 
   */
    public getUstensileForm(ustensile: Ustensile): void 
    {    
      this.addUstensile(ustensile)
    }
  
    /**
     * creation de l'ustensile et ajout de l'ustensile dans le tableau d'ustensile
     * @param ustensile 
     */
    private addUstensile(ustensile: Ustensile): void
    {
      this.ustensileService.createUstensile(ustensile).subscribe((ustensile) => {
        this.ustensiles.push(ustensile)
      })
    }
  


}
