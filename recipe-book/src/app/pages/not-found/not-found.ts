import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <div class="not-found">
      <span class="not-found__code">404</span>
      <p class="not-found__msg">Страница не найдена</p>
      <a routerLink="/" class="not-found__link">Вернуться на главную</a>
    </div>
  `,
  styles: [`
    .not-found {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 60vh;
      gap: 1rem;
    }
    .not-found__code { font-size: 6rem; font-weight: 900; color: #4f46e5; line-height: 1; }
    .not-found__msg { font-size: 1.25rem; color: #6b7280; margin: 0; }
    .not-found__link { color: #4f46e5; font-weight: 600; text-decoration: none; }
    .not-found__link:hover { text-decoration: underline; }
  `],
})
export class NotFoundComponent {}
