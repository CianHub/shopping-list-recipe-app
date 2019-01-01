import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list-service/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];

  ingredientSub: Subscription;

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {
    // Listen for updates to array
    this.ingredientSub = this.shoppingService.refreshIngredients.subscribe(
      ingredients => (this.ingredients = ingredients)
    );

    // Get initial array
    this.shoppingService.getIngredients();

    // Listen for new ingredients and add to them to ingredients array
    this.shoppingService.ingredient.subscribe(ingredient =>
      this.ingredients.push(ingredient)
    );
  }

  ngOnDestroy(): void {
    this.ingredientSub.unsubscribe();
  }
}
