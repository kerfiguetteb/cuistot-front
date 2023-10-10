import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../service/recette.service';
import Recette from '../models/recette.model';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {

  constructor (private recettesService: RecetteService) {}

  recettes!: Recette[]

  onRemove(recette: Recette){
    // filtrage des ingredients
    const recetteFilter = this.recettes.filter((object => object.id !== recette.id))
    this.recettes = recetteFilter
    this.recettesService.deleteRecette(recette.id).subscribe()
    
  }


  ngOnInit(): void {
    this.recettesService.getRecettes().subscribe((recettes) => {
      this.recettes = recettes;
    })
  }

}
