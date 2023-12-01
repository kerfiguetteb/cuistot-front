import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetteComponent } from './recette/recette.component';
import { ShowRecetteComponent } from './recette/show-recette/show-recette.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [

  {path:'', redirectTo:'connexion', pathMatch:'full'},
  {path: 'recettes', component: RecetteComponent},
  {path: 'show/:type', component: ShowRecetteComponent},
  {path: 'show/:type/:id', component: ShowRecetteComponent},
  {path: 'home', component: HomeComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
