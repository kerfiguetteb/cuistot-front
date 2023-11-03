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

  private subscribeRecette(id: number): void {
    this.recetteService.getRecette(id).subscribe((recette) => {
      this.recette = recette
    })
  }

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

  
  /**
   * récuperation de l'ustensile de la recette pour pouvoir la supprimer
   * 
   */
  public removeUstensile(element: Ustensile):void
  {
    /**
     * suppression de l'ustensile
     */
    this.removeUstensileOfRecette(element)
  }

  /**
   * suppresiion de l'ustensile de la Recette
   * @param ustensile 
   */
  private removeUstensileOfRecette(ustensile: Ustensile):void
  {
  }


  /**
   * recuperation de la quantité
   * @param element 
   */
  public removeQuantite(element: IngredientQuantite): void
  {
    console.log(element);
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

    this.ustensileService.getUstensiles().subscribe((ustensile) => {
      this.ustensiles = ustensile
    })  

    this.getIngredientFilter()
  }

}
