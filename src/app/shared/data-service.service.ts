
import {Injectable} from '@angular/core';
import 'rxjs/Rx';

import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';

/*New in Angular 5 is the httpClient (although you can keep using the old http) .
* If using httpClient you dont need to use response or convert from json (both are done automatically)*/

 // Because the built in Angular http is a service we need to use Injectable(), so we can inject a service into a service
@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipe() {
    const token = this.authService.getToken();

    // The recipes.json is needed when working with firebase, otherwise we get cross domain issues
    return this.httpClient.put('https://ngrecipe-92279.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {

    // When interacting with database and using app we need to send along the token otherwise we get errors
    const token = this.authService.getToken();

    // Telling we are going to receive an array of type Recipe
    this.httpClient.get<Recipe[]>('https://ngrecipe-92279.firebaseio.com/recipes.json?auth=' + token)
      .map(
        // using httpClient automatically extracts body of response
        (recipes) => {

          for (const recipe of recipes) {
            // this is to check if fetched recipe has an ingredient property, if not add one to the recipe fetched
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
    }
      );
  }
}
