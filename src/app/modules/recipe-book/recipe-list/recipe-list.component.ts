import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeBookService } from 'src/app/services/recipe-book-service/recipe-book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  // Property is an array of Recipe models
  recipes: Recipe[];
  recipeSub: Subscription;

  constructor(private recipeService: RecipeBookService) {}

  ngOnInit() {
    // Get Recipes from the injected recipeService
    this.recipeSub = this.recipeService.recipesTracker.subscribe(recipes => this.recipes = recipes);

    this.recipeService.getRecipes();
  }
  ngOnDestroy(): void {
    this.recipeSub.unsubscribe();
  }
}
