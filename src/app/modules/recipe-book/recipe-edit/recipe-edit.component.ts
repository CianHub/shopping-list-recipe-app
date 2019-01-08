import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
  FormGroup,
  Form
} from '@angular/forms';
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
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeBookService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'];
      this.initForm();
    });
  }

  public onSubmit() {
    console.log(this.recipeForm.value);
  }

  addIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl([
          null,
          Validators.required,
          Validators.pattern(/^[0-9+[0-9]*$/)
        ])
      })
    );
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  private initForm() {
    let recipeName = '';
    let recipeImage = '';
    let recipeDesc = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id)[0];
      recipeName = recipe.name;
      recipeImage = recipe.imagePath;
      recipeDesc = recipe.description;

      if (recipe['ingredients']) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[0-9+[0-9]*$/)
              ])
            })
          );
        }
      }

      this.recipeForm = new FormGroup({
        name: new FormControl(recipeName, Validators.required),
        imagePath: new FormControl(recipeImage, Validators.required),
        description: new FormControl(recipeDesc, Validators.required),
        ingredients: recipeIngredients
      });
    }
  }
}
