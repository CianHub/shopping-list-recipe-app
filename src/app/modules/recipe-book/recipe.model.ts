import { Ingredient } from 'src/app/shared/ingredient.model';

export class Recipe {
  // Model properties
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  // Model constructor, these properties need to be set to create a recipe
  constructor(
    name: string,
    description: string,
    imagePath: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
