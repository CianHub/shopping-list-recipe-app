import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeBookService } from 'src/app/services/recipe-book-service/recipe-book.service';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss'],
  providers: [RecipeBookService] // Provide a shared instance of this service to all of its child components
})
export class RecipeBookComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeBookService) {}

  ngOnInit() {
    // Assign the selectedRecipe property to the same property in the service
    // This enables the component to react to user interaction
    this.recipeService.selectedRecipe.subscribe(
      (recipe: Recipe) => (this.selectedRecipe = recipe)
    );
  }
}
