import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/modules/recipe-book/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeBookService {
  // This property will emit the Recipe object assigned to it
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is just a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Pug_-_1_year_Old.jpg/1200px-Pug_-_1_year_Old.jpg'
    ),
    new Recipe(
      'Another test Recipe',
      'This is just a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Pug_-_1_year_Old.jpg/1200px-Pug_-_1_year_Old.jpg'
    )
  ];

  // Create a copy of the recipes array
  public getRecipes = () => this.recipes.slice();

  constructor() {}
}
