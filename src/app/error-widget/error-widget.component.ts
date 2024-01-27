import { Component, effect, input } from '@angular/core';

@Component({
  selector: 'app-error-widget',
  standalone: true,
  imports: [],
  template: `
    <div
      class="flex flex-col items-center justify-evenly gap-3 rounded-md border bg-gray-300 p-2 font-geist text-4xl"
    >
      <span>Fehler</span>
      <span>{{ displayedErrors }}</span>
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
