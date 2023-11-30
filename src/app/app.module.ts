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
    InscriptionComponent
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
