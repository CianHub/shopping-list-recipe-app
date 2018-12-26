import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeBookService } from 'src/app/services/recipe-book-service/recipe-book.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  // Property is an array of Recipe models
  recipes: Recipe[];

  constructor(private recipeService: RecipeBookService) {}

  ngOnInit() {
    // Get Recipes from the injected recipeService
    this.recipes = this.recipeService.getRecipes();
  }

  public selectRecipe(recipe: Recipe) {
    // Pass the selected recipe to the emitter in the service
    // This can be subscribed to by any of the components provided with this service
    // This way the selected recipe can be accessed from any of these
    this.recipeService.selectedRecipe.emit(recipe);
  }
}
