import Ingredient from "./ingredient.model";
import IngredientQuantite from "./ingredientQuantite.model";
import Ustensile from "./ustensile.model";

export default class Recette {
    id!:number;
    nom!:string;
    description!:string;
    ingredients!: Ingredient[];
    quantites!: IngredientQuantite[]; 
    ustensiles!: Ustensile[];
    img!: string

}