import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {ShoppingListComponent} from './shopping-list/shopping-list.component'; // leave this in
import {HomeComponent} from './core/home/home.component';

// We are not separating shopping list route, because its only one
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  // this needs to be done for lazy loading, the # points to the class exported in the recipe.module.ts file
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  { path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
