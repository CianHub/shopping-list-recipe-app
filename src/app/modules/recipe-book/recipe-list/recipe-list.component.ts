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
}
