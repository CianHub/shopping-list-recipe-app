import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecipeBookComponent } from './modules/recipe-book/recipe-book.component';
import { ShoppingListComponent } from './modules/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './modules/recipe-book/recipe-detail/recipe-detail.component';
import { RecipeInstructionComponent } from './modules/recipe-book/recipe-instruction/recipe-instruction.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipeBookComponent,
    children: [
      { path: '', component: RecipeInstructionComponent },
      { path: ':id', component: RecipeDetailComponent }
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'recipes' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}