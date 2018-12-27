import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredient = new EventEmitter<Ingredient>();
  refreshIngredients = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Chicken', 2)
  ];
  constructor() {}

  getIngredients = () => this.refreshIngredients.emit(this.ingredients.slice());

  addIngredient = (ingredient: Ingredient) => {
    this.ingredients.push(ingredient);
    this.getIngredients();
  }
  addIngredients = (ingredients: Ingredient[]) => {
    this.ingredients.push(...ingredients);
    this.getIngredients();
  }
}
