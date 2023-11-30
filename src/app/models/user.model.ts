import Recette from "./recette.model";

export class User{
    id! :number;
    username!:string ;
    password !: string ;
    email!: string ;
    enabled!: boolean;
    roles!:string[];
    recettes!: Recette[]
    }