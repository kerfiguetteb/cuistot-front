import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetteComponent } from './recette/recette.component';
import { ShowRecetteComponent } from './recette/show-recette/show-recette.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './auth/connexion/connexion.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './guards/auth.guard';
const routes: Routes = [

  {path: 'recettes', component: RecetteComponent, canActivate:[authGuard]},
  {path: 'show/:type', component: ShowRecetteComponent,  canActivate:[authGuard]},
  {path: 'show/:type/:id', component: ShowRecetteComponent,  canActivate:[authGuard]},
  {path: 'home', component: HomeComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[authGuard]},
  {path:'', redirectTo:'home', pathMatch:'full'},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
