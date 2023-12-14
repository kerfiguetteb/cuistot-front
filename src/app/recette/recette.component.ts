import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../service/recette.service';
import Recette from '../models/recette.model';
import { User } from '../models/user.model';
import { UserService } from '../service/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {
[x: string]: any;

  constructor(
    private recettesService: RecetteService,
    private userService: UserService,
    private formBuilder: FormBuilder
    ) { }

  recettes!: Recette[];
  message!: boolean;
  user!: User;
  recetteSucrer!: Recette[]
  recetteSaler!: Recette[]
  hidden: boolean = true;

  recetteType = {
    sucrer : 'sucrée',
    saler: 'salée'
  }

  
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
    
    // on filtre le tableau user.recettes pour la MAJ de User
    
    // MAJ User
    this.updateRecetteOfUser(this.user)
    //on filtre le tableau recette par type
    this.filterRecetteByType(recette.type)

  }

  filterRecetteByType(type: string){
    const recetteFilter = this.recettes.filter((object => object.type === type))
    if (type === this.recetteType.sucrer) {
      this.recetteSucrer = recetteFilter
    }else{
      this.recetteSaler = recetteFilter
    }
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
      recette.user_id = this.user.id
      recette.quantites = []
      recette.ustensiles = []
      recette.etapes = []
      console.log(recette);
      
    this.recettesService.createRecette(recette).subscribe((recette) => {
      if (recette.type === this.recetteType.saler) {
        this.recetteSaler.push(recette)
        
      }else{
        this.recetteSucrer.push(recette)
      }
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

  /**
   * suppression de la recette de l'utilisateur
   * @param user 
   */
  private updateRecetteOfUser(user: User){
    this.userService.updateUser(user).subscribe()
  }


  ngOnInit(): void {

    this.userService.getUser(+sessionStorage['id']).subscribe((user)=>{this.user = user})
    this.recettesService.recetteByUser(+sessionStorage['id']).subscribe((recettes) => {
      this.recettes = recettes;
      this.filterRecetteByType(this.recetteType.saler)
      this.filterRecetteByType(this.recetteType.sucrer)
    })


  }
}
