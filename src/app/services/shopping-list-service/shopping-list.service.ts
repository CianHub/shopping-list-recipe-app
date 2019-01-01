import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredient = new Subject<Ingredient>();
  refreshIngredients = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Chicken', 2)
  ];
  constructor() {}

  getIngredients = () => this.refreshIngredients.next(this.ingredients.slice());

  addIngredient = (ingredient: Ingredient) => {
    this.ingredients.push(ingredient);
    this.getIngredients();
  }
  addIngredients = (ingredients: Ingredient[]) => {
    this.ingredients.push(...ingredients);
    this.getIngredients();
  }
}
