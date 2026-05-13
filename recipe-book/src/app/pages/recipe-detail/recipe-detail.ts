import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RECIPES, CATEGORY_LABELS } from '../../data/recipes';

@Component({
  selector: 'app-recipe-detail',
  imports: [RouterLink],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css',
})
export class RecipeDetailComponent {
  id = input.required<string>();

  readonly recipe = computed(() => RECIPES.find((r) => r.id === Number(this.id())) ?? null);
  readonly categoryLabels = CATEGORY_LABELS;
}
