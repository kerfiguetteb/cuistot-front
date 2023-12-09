import Recette from "./recette.model";

export class User{
    id! :number;
    fullName!:string ;
    password !: string ;
    email!: string ;
    // roles!:string[];
    recettes!: Recette[]
    cuistots!: User[]
    }