import { Component, EventEmitter, Input, Output } from '@angular/core';
import Recette from 'src/app/models/recette.model';
import Ustensile from 'src/app/models/ustensile.model';
import { RecetteService } from 'src/app/service/recette.service';
import { UstensileService } from 'src/app/service/ustensile.service';

@Component({
  selector: 'app-list-ustensile',
  templateUrl: './list-ustensile.component.html',
  styleUrls: ['./list-ustensile.component.scss']
})
export class ListUstensileComponent {

  constructor(private ustensileService: UstensileService, private recetteService: RecetteService) {}

  @Input()
  ustensiles!: Ustensile[]

  @Input()
  recette!: Recette


  /**
   * cette fonction filtre les ustensiles en fonction des ustensile de la recette 
   */
  public filterUstensile(){
    this.recette.ustensiles.forEach((element) => {
      const ustensilesFilter = this.ustensiles.filter((ustensile => ustensile.id !== element.id))
      this.ustensiles = ustensilesFilter
      
    })
    
  }
  /**
   * Ajout des ustensiles dans la recette 
   * @param element 
   */
  public add(element: Ustensile): void
  {
    this.recette.ustensiles.push(element)
    this.addUstensileOfRecette(this.recette)
    this.filterUstensile()
  }

  /**
   * Mise-a-jour de la recette
   * @param recette 
   */
  private addUstensileOfRecette(recette: Recette) :void 
  {
    this.recetteService.updateRecette(recette).subscribe()
  }

  /**
   * Mise-a-jour de l'ustensile
   * @param element 
   */
  public remove(element: Ustensile): void 
  {  
    this.deleteUstensile(element)
    const ustensilesFilter = this.ustensiles.filter((ustensile => ustensile.id !== element.id))
    this.ustensiles = ustensilesFilter
    
  }

  /**
   * suppression de l'ustensile
   * @param ustensile 
   */ 
  private deleteUstensile(ustensile: Ustensile): void {
    this.ustensileService.deleteUstensile(ustensile.id).subscribe()
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
