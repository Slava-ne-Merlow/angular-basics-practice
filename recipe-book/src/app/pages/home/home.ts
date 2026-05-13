import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Recipe } from '../../models/recipe';
import { RECIPES } from '../../data/recipes';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RecipeCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  readonly featuredRecipes = RECIPES.slice(0, 3);

  readonly features = [
    { icon: '🍜', title: 'Разнообразие', text: 'Супы, закуски, десерты и напитки на любой вкус' },
    { icon: '⏱', title: 'Быстро', text: 'Рецепты от 15 минут — найдётся время для каждого' },
    { icon: '🔍', title: 'Удобный поиск', text: 'Фильтрация по категории и названию блюда' },
  ];

  constructor(private router: Router) {}

  onRecipeSelected(recipe: Recipe): void {
    this.router.navigate(['/recipes', recipe.id]);
  }
}
