import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { RecipesComponent } from './pages/recipes/recipes';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/:id', component: RecipeDetailComponent },
  { path: '**', component: NotFoundComponent },
];
