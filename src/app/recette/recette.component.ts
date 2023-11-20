import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../service/recette.service';
import Recette from '../models/recette.model';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {

  constructor(private recettesService: RecetteService) { }

  recettes!: Recette[]


  hidden: boolean = true
  
  toggle() {
    this.hidden = !this.hidden;
  }


  /**
   * filtrage des données de Recette  
   * @param recette 
   */
  public remove(recette: Recette): void {
    this.delete(recette)
    // on filtres la recette qui vien d'etre supprimer dans le tableau recettes
    const recetteFilter = this.recettes.filter((object => object.id !== recette.id))
    this.recettes = recetteFilter

  }

  /**
   * ajout des recettes recupere via event (onRecette)
   * @param element 
   */
  public addRecette(element: Recette): void {
    this.create(element)
  }

  /**
   * creation d'une nouvelle recette
   * @param recette
   */
  private create(recette: Recette): void {
    this.recettesService.createRecette(recette).subscribe((recette) => {
      this.recettes.push(recette);
    });
  }

  /**
   * suppresion d'une recette
   * @param recette 
   */
  private delete(recette: Recette): void {
    this.recettesService.deleteRecette(recette.id).subscribe()
  }


  ngOnInit(): void {
    this.recettesService.getRecettes().subscribe((recettes) => {
      this.recettes = recettes;
    })
  }

}
