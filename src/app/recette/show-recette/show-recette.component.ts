import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Ingredient from 'src/app/models/ingredient.model';
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
  ingredients!: Ingredient[];
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
  
  ngOnInit(): void {
    const type = this.route.snapshot.paramMap.get('type');
    const id = this.route.snapshot.paramMap.get('id');
    this.setSubscribe(type, id)

    this.ustensileService.getUstensiles().subscribe((ustensile) => {
      this.ustensiles = ustensile
    })

    this.ingredientService.getIngredients().subscribe((ingredient) => {
      this.ingredients = ingredient
    })
  }

}
