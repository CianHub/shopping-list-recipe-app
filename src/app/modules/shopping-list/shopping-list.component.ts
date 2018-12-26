import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list-service/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit() {
    // Listen for updates to array
    this.ingredients = this.shoppingService.refreshIngredients.subscribe(
      ingredients => (this.ingredients = ingredients)
    );

    // Get initial array
    this.shoppingService.getIngredients();

    // Listen for new ingredients and add to them to ingredients array
    this.shoppingService.ingredient.subscribe(ingredient =>
      this.ingredients.push(ingredient)
    );
  }
}
