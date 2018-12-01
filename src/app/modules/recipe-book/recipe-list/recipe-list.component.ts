import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  // Property is an array of Recipe models
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is just a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Pug_-_1_year_Old.jpg/1200px-Pug_-_1_year_Old.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}
}
