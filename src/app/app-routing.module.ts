import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngredientComponent } from './ingredient/ingredient.component';
import { UstensileComponent } from './ustensile/ustensile.component';
import { RecetteComponent } from './recette/recette.component';

const routes: Routes = [

  {path: 'ingredients', component: IngredientComponent},
  {path: 'ustensiles', component: UstensileComponent},
  {path: 'recettes', component: RecetteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
