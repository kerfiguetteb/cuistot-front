import Recette from "./recette.model";

export class User{
    id! :number;
    fullName!:string ;
    password !: string ;
    email!: string ;
    enabled!: boolean;
    roles!:string[];
    recettes!: Recette[]
    }