import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list-service/shopping-list.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent implements OnInit {

  ingredientForm = this.fb.group({
    name: [null, Validators.required],
    amount: [null,  Validators.required]
  });

  constructor(private shoppingService: ShoppingListService, private fb: FormBuilder) {}

  ngOnInit() {}

  public addIngredient = () => {
    // Make the new ingredient accessible to every component with access to the service

    if (this.ingredientForm.valid) {
      return this.shoppingService.ingredient.next(
        new Ingredient(
          this.ingredientForm.get('name').value,
          this.ingredientForm.get('amount').value
        )
      );
   }
   this.ingredientForm.get('name').markAsTouched();
   this.ingredientForm.get('amount').markAsTouched();
  }

  public clearIngredients = () => this.ingredientForm.reset();

  public errorMessage = (formControlName) => {
    if (this.ingredientForm.get(formControlName).errors) {
      return 'A value is required for this field';
    }
  }

}
