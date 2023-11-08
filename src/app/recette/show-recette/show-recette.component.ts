import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Ingredient from 'src/app/models/ingredient.model';
import IngredientQuantite from 'src/app/models/ingredientQuantite.model';
import Recette from 'src/app/models/recette.model';
import Ustensile from 'src/app/models/ustensile.model';
import { IngredientService } from 'src/app/service/ingredient.service';
import { RecetteService } from 'src/app/service/recette.service';
import { UstensileService } from 'src/app/service/ustensile.service';

@Component({
  selector: 'app-show-recette',
  templateUrl: './show-recette.component.html',
  styleUrls: ['./show-recette.component.scss']
})
export class ShowRecetteComponent implements OnInit {

  recette!: Recette;
  ingredients: Ingredient[] = [];
  ustensiles!: Ustensile[];
  
  hidden: boolean = true
  
  toggle() {
    this.hidden = !this.hidden;
  }
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recetteService: RecetteService,
    private ingredientService: IngredientService,
    private ustensileService: UstensileService
  ) { }

  /**
   * 
   * @param id 
   */
  private subscribeRecette(id: number): void {
    this.recetteService.getRecette(id).subscribe((recette) => {
      this.recette = recette
    })
  }

  /**
   * 
   * @param type 
   * @param id 
   */
  private setSubscribe(type: string | null, id: string | null): void {
    if (id && type === 'recettes') {
      this.subscribeRecette(+id)
    }else if (!id || !type) {
      this.router.navigate(['/recettes'])
    }
  }

  // cette fonction filtres les ingredients en fonction des ingredients que possede la recette
  public getIngredientFilter(){
    this.ingredientService.getIngredients().subscribe((ingredient) => {
      this.ingredients = ingredient
      this.recette.quantites.forEach((element) => {
        const ingredientFilter = this.ingredients.filter((ingredient => ingredient.id !== element.ingredient.id))
        this.ingredients = ingredientFilter
        
      })
    });  
  } 

  // cette fonction filtres les ustensiles en fonction des ustensiles que possede la recette
  public getUstensilesFilter(){
    this.ustensileService.getUstensiles().subscribe((ustensile) => {
      this.ustensiles = ustensile
      this.recette.ustensiles.forEach((element) => {
        const ustensilesFilter = this.ustensiles.filter((ustensile => ustensile.id !== element.id))
        this.ustensiles = ustensilesFilter
        
      })
    });  
  } 

  
  /**
   * récuperation de l'ustensile de la recette pour pouvoir la supprimer
   * @param element
   */
  public removeUstensile(element: Ustensile):void
  {
    
    this.ustensileFilter(element.id)
    this.updateRecette(this.recette)
    this.getUstensilesFilter()
  }

  private ustensileFilter(id: number): void{
    const ustensilesFilter = this.recette.ustensiles.filter((
      ustensile => ustensile.id !== id))
    this.recette.ustensiles = ustensilesFilter
}

  private ingredientFilter(id: number): void{
    const ingredientFilter = this.recette.quantites.filter((
      quantite => quantite.ingredient.id !== id))
    this.recette.quantites = ingredientFilter
    
}

  /**
   * suppresiion de l'ustensile de la Recette
   * @param ustensile 
   */

  /**
   * recuperation de la quantité
   * @param element 
   */
  public removeQuantite(element: IngredientQuantite): void
  {    
    this.ingredientFilter(element.ingredient.id)
    this.updateRecette(this.recette)
    this.getIngredientFilter()
  }


  /**
   * 
   * @param recette 
   */
  private updateRecette(recette: Recette): void
  {
    this.recetteService.updateRecette(recette).subscribe()
  }
 
 
  
  ngOnInit(): void {
    const type = this.route.snapshot.paramMap.get('type');
    const id = this.route.snapshot.paramMap.get('id');
    this.setSubscribe(type, id)

    this.getUstensilesFilter()
    this.getIngredientFilter()
  }

}
