import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Etape from 'src/app/models/etape.model';
import Ingredient from 'src/app/models/ingredient.model';
import IngredientQuantite from 'src/app/models/ingredientQuantite.model';
import Recette from 'src/app/models/recette.model';
import Ustensile from 'src/app/models/ustensile.model';
import { EtapeService } from 'src/app/service/etape.service';
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
    private ustensileService: UstensileService,
    private etapeService: EtapeService
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
    } else if (!id || !type) {
      this.router.navigate(['/recettes'])
    }
  }

  // cette fonction filtres les ingredients en fonction des ingredients que possede la recette
  public getIngredientFilter(): void {
    this.ingredientService.getIngredients().subscribe((ingredient) => {
      this.ingredients = ingredient
      this.recette.quantites.forEach((element) => {
        const ingredientFilter = this.ingredients.filter((ingredient => ingredient.id !== element.ingredient.id))
        this.ingredients = ingredientFilter

      })
    });
  }

  // cette fonction filtres les ustensiles en fonction des ustensiles que possede la recette
  public getUstensilesFilter(): void {
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
  public removeUstensile(element: Ustensile): void {
    // Filtrage de l'ustensile qu'on veut suprimmer 
    this.ustensileFilter(element.id)
    // Mise a jour de la recette
    this.updateRecette(this.recette)
    // Appel de la fonction de service (getallUstensile) et de filtrage  des ustensilles
    this.getUstensilesFilter()
  }

  /**
   * filtrage des ustensile
   * @param id 
   */
  private ustensileFilter(id: number): void {
    const ustensilesFilter = this.recette.ustensiles.filter((
      ustensile => ustensile.id !== id))
    this.recette.ustensiles = ustensilesFilter
  }

  /**
   * filtrage des ustensile
   * @param id 
   */
  private ingredientFilter(id: number): void {
    const ingredientFilter = this.recette.quantites.filter((
      quantite => quantite.ingredient.id !== id))
    this.recette.quantites = ingredientFilter

  }

  /**
   * recuperation de la quantité
   * @param element 
   */
  public removeQuantite(element: IngredientQuantite): void {
    // Filtrage des ingredients qu'on veut suprimmer   
    this.ingredientFilter(element.ingredient.id)

    // Mise a jour de la recette
    this.updateRecette(this.recette)

    // Appel de la fonction de service (getallIngredient) et de filtrage  des ingredients
    this.getIngredientFilter()
  }


  /**
   * 
   * @param recette 
   */
  private updateRecette(recette: Recette): void {
    this.recetteService.updateRecette(recette).subscribe()
  }


  /**
   * cette fonction récupere l'etape du formulaire
   * @param etape 
   */
  public getEtape(etape: Etape): void {
    this.addEtapeOfRecette(etape)
  }

  /**
   * cette fonction enregistre l'etape de la recette
   * @param etape 
   */
  private addEtapeOfRecette(etape: Etape): void {
    this.etapeService.createEtape(etape).subscribe((etape) => {
      this.recette.etapes.push(etape)
      this.recetteService.updateRecette(this.recette).subscribe()
    }
    )
  }

  ngOnInit(): void {
    const type = this.route.snapshot.paramMap.get('type');
    const id = this.route.snapshot.paramMap.get('id');
    this.setSubscribe(type, id)

    this.getUstensilesFilter()
    this.getIngredientFilter()
  }

}
