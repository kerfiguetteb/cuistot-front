import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetteComponent } from './recette/recette.component';
import { ShowRecetteComponent } from './recette/show-recette/show-recette.component';
const routes: Routes = [

  // {path: 'ingredients', component: IngredientComponent},
  // {path: 'ustensiles', component: UstensileComponent},
  {path: 'recettes', component: RecetteComponent},
  {path: 'show/:type', component: ShowRecetteComponent},
  {path: 'show/:type/:id', component: ShowRecetteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
