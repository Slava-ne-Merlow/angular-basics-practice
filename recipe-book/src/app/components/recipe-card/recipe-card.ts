import { Component, input, output } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { CATEGORY_LABELS } from '../../data/recipes';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-recipe-card',
  imports: [TruncatePipe, HighlightDirective],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.css',
})
export class RecipeCardComponent {
  recipe = input.required<Recipe>();
  selected = output<Recipe>();

  readonly categoryLabels = CATEGORY_LABELS;

  onSelect(): void {
    this.selected.emit(this.recipe());
  }
}
