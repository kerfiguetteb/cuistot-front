import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { AddRecetteComponent } from './recette/add-recette/add-recette.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddIngredientComponent } from './ingredient/add-ingredient/add-ingredient.component';
import { IngredientComponent } from './ingredient/ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AddRecetteComponent,
    AddIngredientComponent,
    IngredientComponent
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
