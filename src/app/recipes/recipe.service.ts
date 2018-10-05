import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()

export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  // here we are saying that recipes only excepts an Recipe array
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is simply a test',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Recipes-Food-Vegetables-Recipe-Plant-Vegetable-140922.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Chips', 20),
        new Ingredient('Peas', 25),
        new Ingredient('Carrots', 25),
        new Ingredient('Mushrooms', 10)
      ]),
    new Recipe(
      'Another test recipe',
      'This is simply a test',
      'http://maxpixel.freegreatpicture.com/static/photo/1x/Recipes-Food-Vegetables-Recipe-Plant-Vegetable-140922.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Chips', 20),
        new Ingredient('Onion', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {};

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice(); // .slice() is making a copy of the array when returning
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
