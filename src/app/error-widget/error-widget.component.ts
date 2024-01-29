import { Component, effect, inject, input } from '@angular/core';
import { WordService } from '../word.service';

@Component({
  selector: 'app-error-widget',
  standalone: true,
  imports: [],
  template: `
    <div
      class="flex flex-col items-center justify-evenly gap-3 rounded-md  p-4 shadow-lg  outline-dotted outline-2 dark:bg-black  dark:text-white  dark:outline-white"
    >
      <p class="font-geist tracking-wider">Errors</p>
      <p class="font-tech text-4xl">{{ displayedErrors }}</p>
    </div>
  `,
  styles: ``,
})
export class ErrorWidgetComponent {
  wordService = inject(WordService);
  displayedErrors = 0;
  constructor() {
    effect(() => {
      setInterval(() => {
        if (this.displayedErrors < this.wordService.errors()) {
          this.displayedErrors++;
        }
      }, 100);
    });
  }
}
