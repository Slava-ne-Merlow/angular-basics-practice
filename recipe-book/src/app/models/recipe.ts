export type RecipeCategory = 'main' | 'dessert' | 'soup' | 'drink' | 'salad';

export interface Recipe {
  id: number;
  name: string;
  image: string;
  description: string;
  category: RecipeCategory;
  preparationTime: number;
}
