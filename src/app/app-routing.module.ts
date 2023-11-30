import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetteComponent } from './recette/recette.component';
import { ShowRecetteComponent } from './recette/show-recette/show-recette.component';
import { ConnexionComponent } from './auth/connexion/connexion.component';
import { InscriptionComponent } from './auth/inscription/inscription.component';
const routes: Routes = [

  {path:'', redirectTo:'connexion', pathMatch:'full'},
  {path: 'recettes', component: RecetteComponent},
  {path: 'show/:type', component: ShowRecetteComponent},
  {path: 'show/:type/:id', component: ShowRecetteComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'inscription', component: InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
