

import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {AuthGuard} from '../auth/auth-guard.service';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';

// If we separate by feature, we HAVE to separate the routes if used in said feature components

const recipesRoutes: Routes = [
  { path: '', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]}, // needs to come before dynamic routes
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
  ]}
]

// forChild is used when splitting by feature not forRoot which is only used in the main app module
@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule]
})
export class RecipesRoutingModule {}
