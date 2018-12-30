import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/services/shopping-list-service/shopping-list.service';
import { RecipeBookService } from 'src/app/services/recipe-book-service/recipe-book.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  route = this.activatedRoute;

  constructor(
    private shoppingService: ShoppingListService,
    private recipeService: RecipeBookService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>
      this.getRecipe(+params['id'])
    );
  }

  addIngredientsToShoppingList(ingredients) {
    this.shoppingService.addIngredients(ingredients);
  }

  getRecipe = id => (this.recipe = this.recipeService.getRecipe(id)[0]);
}
