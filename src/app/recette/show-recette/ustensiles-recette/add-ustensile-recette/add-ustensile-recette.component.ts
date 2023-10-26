import { Component, Input, Output } from '@angular/core';
import Ingredient from 'src/app/models/ingredient.model';
import Recette from 'src/app/models/recette.model';
import Ustensile from 'src/app/models/ustensile.model';
import { RecetteService } from 'src/app/service/recette.service';

@Component({
  selector: 'app-add-ustensile-recette',
  templateUrl: './add-ustensile-recette.component.html',
  styleUrls: ['./add-ustensile-recette.component.scss']
})
export class AddUstensileRecetteComponent {

  @Input() 
  ustensiles!: Ustensile[]

  @Input()
  recette!: Recette

  ustensile: Ustensile[] = []

  // @Output()

  constructor( private recetteService: RecetteService){}

  hidden: boolean = true



  toggle() {
    this.hidden = !this.hidden;
  }

  updateRecette(element: Ustensile){
    this.ustensile.push(element) 
  }

  addUstensile(ustensile: Ustensile){

    this.remove(ustensile)
    this.updateRecette(ustensile)
    this.recette.ustensiles = this.ustensile
    this.recetteService.updateRecette(this.recette).subscribe()    
  }

  remove(ustensile: Ustensile){
    const ustensileFilter = this.ustensiles.filter((object => object.id !== ustensile.id))
    this.ustensiles = ustensileFilter
    console.log(this.ustensiles);
    

}





}
