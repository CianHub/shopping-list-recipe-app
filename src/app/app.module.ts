import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular Material Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material Module
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './modules/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './modules/recipe-book/recipe-book.component';
import { HeaderComponent } from './modules/header/header.component';
import { ShoppingListEditComponent } from './modules//shopping-list/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './modules/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './modules/recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './modules/recipe-book/recipe-detail/recipe-detail.component';
import { DropdownDirective } from './shared/dropdown-menu/dropdown.directive';
import { ShoppingListService } from './services/shopping-list-service/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeInstructionComponent } from './modules/recipe-book/recipe-instruction/recipe-instruction.component';
import { RecipeEditComponent } from './modules/recipe-book/recipe-edit/recipe-edit.component';

@NgModule({
  // A module is used to bundle components together
  // NgModule decorator marks the class as a module for the compiler
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    HeaderComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DropdownDirective,
    RecipeInstructionComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
