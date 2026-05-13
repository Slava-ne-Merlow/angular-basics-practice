import { Recipe, RecipeCategory } from '../models/recipe';

export const CATEGORY_LABELS: Record<RecipeCategory, string> = {
  soup: 'Суп',
  main: 'Основное',
  dessert: 'Десерт',
  drink: 'Напиток',
  salad: 'Салат',
};

export const RECIPES: Recipe[] = [
  {
    id: 1,
    name: 'Борщ',
    image: 'https://picsum.photos/seed/borscht/800/400',
    description: 'Классический борщ со свёклой, капустой и говядиной. Наваристый ароматный суп с кислинкой. Подаётся со сметаной и чёрным хлебом.',
    category: 'soup',
    preparationTime: 90,
  },
  {
    id: 2,
    name: 'Пельмени',
    image: 'https://picsum.photos/seed/pelmeni/800/400',
    description: 'Домашние пельмени с говяжье-свиным фаршем. Тонкое тесто, сочная начинка. Подаются со сметаной или сливочным маслом.',
    category: 'main',
    preparationTime: 120,
  },
  {
    id: 3,
    name: 'Блины',
    image: 'https://picsum.photos/seed/bliny/800/400',
    description: 'Тонкие блинчики на молоке. Идеальны с красной икрой, сметаной или вареньем. Символ Масленицы.',
    category: 'dessert',
    preparationTime: 40,
  },
  {
    id: 4,
    name: 'Салат Оливье',
    image: 'https://picsum.photos/seed/olivier/800/400',
    description: 'Знаменитый салат с варёной колбасой, картофелем, морковью, огурцами, горошком и майонезом.',
    category: 'salad',
    preparationTime: 60,
  },
  {
    id: 5,
    name: 'Домашний лимонад',
    image: 'https://picsum.photos/seed/lemonade/800/400',
    description: 'Освежающий лимонад из свежих лимонов, мяты и газированной воды. Без консервантов и красителей.',
    category: 'drink',
    preparationTime: 15,
  },
  {
    id: 6,
    name: 'Тирамису',
    image: 'https://picsum.photos/seed/tiramisu/800/400',
    description: 'Итальянский десерт с савоярди, маскарпоне и эспрессо. Нежный, воздушный, тающий во рту.',
    category: 'dessert',
    preparationTime: 30,
  },
  {
    id: 7,
    name: 'Рассольник',
    image: 'https://picsum.photos/seed/rassolnik/800/400',
    description: 'Традиционный суп с солёными огурцами и перловкой. Насыщенный вкус с приятной кислинкой.',
    category: 'soup',
    preparationTime: 75,
  },
  {
    id: 8,
    name: 'Котлеты по-киевски',
    image: 'https://picsum.photos/seed/kiev/800/400',
    description: 'Котлеты из куриной грудки с начинкой из сливочного масла и зелени. Хрустящая панировка снаружи, сочность внутри.',
    category: 'main',
    preparationTime: 50,
  },
];
