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
    ListUstensileComponent
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
