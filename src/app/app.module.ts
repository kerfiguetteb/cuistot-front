import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecetteComponent } from './recette/recette.component';
import { AddRecetteComponent } from './recette/add-recette/add-recette.component';
import { CardComponent } from './shared/card/card.component';
import { ShowRecetteComponent } from './recette/show-recette/show-recette.component';
import { TableComponent } from './shared/table/table.component';
import { AddUstensileComponent } from './recette/show-recette/add-ustensile/add-ustensile.component';
import { AddIngredientComponent } from './recette/show-recette/add-ingredient/add-ingredient.component';
import { ListIngredientComponent } from './recette/show-recette/list-ingredient/list-ingredient.component';
import { ListUstensileComponent } from './recette/show-recette/list-ustensile/list-ustensile.component';
import { ValidationMessageComponent } from './shared/component/validation-message/validation-message.component';
import { AddEtapeComponent } from './recette/show-recette/add-etape/add-etape.component';
import { ListEtapeComponent } from './recette/show-recette/list-etape/list-etape.component';
import { ConnexionComponent } from './auth/connexion/connexion.component';
import { InscriptionComponent } from './auth/inscription/inscription.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { CarousselComponent } from './home/caroussel/caroussel.component';
import { MarketingComponent } from './home/marketing/marketing.component';
import { FeaturettesComponent } from './home/featurettes/featurettes.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarProfileComponent } from './commons/header/navbar-profile/navbar-profile.component';
import { NavbarVisiteurComponent } from './commons/header/navbar-visiteur/navbar-visiteur.component';
import { ProfileDetailComponent } from './profile/profile-detail/profile-detail.component';
import { MesRecettesComponent } from './profile/mes-recettes/mes-recettes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecetteComponent,
    AddRecetteComponent,
    CardComponent,
    ShowRecetteComponent,
    TableComponent,
    AddUstensileComponent,
    AddIngredientComponent,
    ListIngredientComponent,
    ListUstensileComponent,
    ValidationMessageComponent,
    AddEtapeComponent,
    ListEtapeComponent,
    ConnexionComponent,
    InscriptionComponent,
    AuthComponent,
    HomeComponent,
    CarousselComponent,
    MarketingComponent,
    FeaturettesComponent,
    ProfileComponent,
    NavbarProfileComponent,
    NavbarVisiteurComponent,
    ProfileDetailComponent,
    MesRecettesComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
