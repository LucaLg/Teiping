import { Component, effect, input } from '@angular/core';

@Component({
  selector: 'app-error-widget',
  standalone: true,
  imports: [],
  template: `
    <div
      class="flex flex-col items-center justify-evenly gap-3 rounded-md border-black bg-gray-400 p-4  shadow-lg"
    >
      <p class="font-geist tracking-wider">Errors</p>
      <p class="font-tech text-4xl">{{ displayedErrors }}</p>
    </div>
  `,
  styles: ``,
})
export class ErrorWidgetComponent {
  errors = input.required<number>();
  displayedErrors = 0;
  constructor() {
    effect(() => {
      setInterval(() => {
        if (this.displayedErrors < this.errors()) {
          this.displayedErrors++;
        }
      }, 100);
    });
  }
}
