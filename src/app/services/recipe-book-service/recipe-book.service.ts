import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/modules/recipe-book/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeBookService {
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'A test Recipe',
      'This is just a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Pug_-_1_year_Old.jpg/1200px-Pug_-_1_year_Old.jpg',
      [new Ingredient('Pug', 1), new Ingredient('Buns', 5)]
    ),
    new Recipe(
      2,
      'Another test Recipe',
      'This is just a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Pug_-_1_year_Old.jpg/1200px-Pug_-_1_year_Old.jpg',
      [new Ingredient('Fat Pugs', 7)]
    )
  ];

  // Create a copy of the recipes array
  public getRecipes = () => this.recipes.slice();

  public getRecipe = id => this.recipes.filter(recipe => recipe.id === id);

  constructor() {}
}
