import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  token: string;
  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    this.token = this.authService.getToken();
    return this.http.put(
      'https://recipe-project-da13f.firebaseio.com/recipes.json?auth=' +
        this.token,
      this.recipeService.getRecipes()
    );
  }

  getRecipes() {
    this.token = this.authService.getToken();
    return this.http
      .get(
        'https://recipe-project-da13f.firebaseio.com/recipes.json?auth=' +
          this.token
      )
      .pipe(
        map((response: Response) => {
          const recipes: Recipe[] = response.json();
          // tslint:disable-next-line:prefer-const
          for (let recipe of recipes) {
            if (!recipe.ingredients) {
              console.log(recipe);
              recipe.ingredients = [];
            }
          }
          return recipes;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        console.log(recipes);
        this.recipeService.setRecipes(recipes);
      });
  }
}
