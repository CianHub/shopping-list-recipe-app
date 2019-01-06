import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormArray, FormGroup } from '@angular/forms';
import { RecipeBookService } from 'src/app/services/recipe-book-service/recipe-book.service';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  newRecipe: Recipe;
  constructor(private route: ActivatedRoute, private fb: FormBuilder, private recipeService: RecipeBookService) {}

  recipeForm = this.fb.group({
    name: [''],
    description: [''],
    image: [''],
    ingredients: this.fb.array([])
  }, Validators.required );

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'];
    });
  }

  get ingredientsArray(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  public addIngredientField = () => this.ingredientsArray.push(new FormGroup({
    ingredientName: new FormControl(null),
    ingredientAmount: new FormControl(null)
  }))

  public errorMessage = (formControlName) => {
    if (this.recipeForm.get(formControlName).errors) {
      return 'A value is required for this field';
    }
  }
  public resetRecipe = () => this.recipeForm.reset();

  public addRecipe = () => {
    this.recipeForm.valid ?
    this.recipeService.recipes.push(this.recipeMaker(this.idMaker(), this.ingredientMaker())) : this.touchForm();
  }

  public idMaker = () => {
    return this.recipeService.recipes.length + 1; }

  public ingredientMaker = () => {
    const newIngredients = [];
    this.recipeForm.value.ingredients.map(values => {
      const newIng = new Ingredient(values.ingredientName, values.ingredientAmount);
      newIngredients.push(newIng);
    });
    return newIngredients;
  }

  public touchForm = () => {
    this.recipeForm.get('name').markAsTouched();
    this.recipeForm.get('description').markAsTouched();
    this.recipeForm.get('image').markAsTouched();
    this.recipeForm.get('ingredients').markAsTouched();
  }

  public recipeMaker = (id, newIngredients) => {
    return new Recipe(
      id,
      this.recipeForm.value.name,
      this.recipeForm.value.description,
      this.recipeForm.value.image,
      newIngredients);
    }

}
