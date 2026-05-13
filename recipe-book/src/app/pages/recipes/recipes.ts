import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe, RecipeCategory } from '../../models/recipe';
import { RECIPES, CATEGORY_LABELS } from '../../data/recipes';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card';

interface CategoryOption {
  value: RecipeCategory | '';
  label: string;
}

@Component({
  selector: 'app-recipes',
  imports: [FormsModule, RecipeCardComponent],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class RecipesComponent {
  searchName = '';
  selectedCategory: RecipeCategory | '' = '';

  readonly allRecipes: Recipe[] = RECIPES;
  readonly categoryLabels = CATEGORY_LABELS;
  readonly categoryOptions: CategoryOption[] = [
    { value: '', label: 'Все категории' },
    { value: 'soup', label: 'Суп' },
    { value: 'main', label: 'Основное' },
    { value: 'dessert', label: 'Десерт' },
    { value: 'drink', label: 'Напиток' },
    { value: 'salad', label: 'Салат' },
  ];

  constructor(private router: Router) {}

  get filteredRecipes(): Recipe[] {
    return this.allRecipes.filter((r) => {
      const matchName = r.name.toLowerCase().includes(this.searchName.toLowerCase());
      const matchCategory = !this.selectedCategory || r.category === this.selectedCategory;
      return matchName && matchCategory;
    });
  }

  onRecipeSelected(recipe: Recipe): void {
    this.router.navigate(['/recipes', recipe.id]);
  }
}
