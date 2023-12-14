import Etape from "./etape.model";
import IngredientQuantite from "./ingredientQuantite.model";
import { User } from "./user.model";
import Ustensile from "./ustensile.model";

export default class Recette {
    id!:number;
    nom!:string;
    description!:string;
    quantites!: IngredientQuantite[]; 
    ustensiles!: Ustensile[];
    img!: string
    prepartion!: number
    cuisson!: number
    repos!: number
    etapes!: Etape[]
    user_id!: number
    type!: string

}