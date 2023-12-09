import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../service/recette.service';
import Recette from '../models/recette.model';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {

  constructor(private recettesService: RecetteService, private userService: UserService) { }

  recettes!: Recette[]

  message!: boolean

  user!: User


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

    const recetteUserFilter = this.user.recettes.filter((object => object.id !== recette.id))
    this.user.recettes = recetteUserFilter

    this.updateRecetteOfUser(this.user)

  }

  /**
   * ajout des recettes recupere via event (onRecette)
   * @param element 
   */
  public addRecette(element: Recette): void {
    this.message = true
    this.create(element)

  }

  /**
   * creation d'une nouvelle recette
   * @param recette
   */
  private create(recette: Recette): void {
    this.recettesService.createRecette(recette).subscribe((recette) => {
      this.recettes.push(recette);
      this.user.recettes.unshift(recette)
      this.userService.updateUser(this.user).subscribe()
    });


  }

  /**
   * suppresion d'une recette
   * @param recette 
   */
  private delete(recette: Recette): void {
    this.recettesService.deleteRecette(recette.id).subscribe()

  }

  /**
   * suppression de la recette de l'utilisateur
   * @param user 
   */
  private updateRecetteOfUser(user: User){
    this.userService.updateUser(user).subscribe()
  }


  ngOnInit(): void {

    this.userService.getUser(+sessionStorage['id']).subscribe((user)=>{this.user = user})
    this.recettesService.getRecettes().subscribe((recettes) => {
      this.recettes = recettes;
    })
  }

}
