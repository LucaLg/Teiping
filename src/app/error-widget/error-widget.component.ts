import { Component, effect, input } from '@angular/core';

@Component({
  selector: 'app-error-widget',
  standalone: true,
  imports: [],
  template: `
    <div
      class="items-center gap-3 font-geist text-4xl rounded-md border bg-gray-300 p-2 flex flex-col justify-evenly"
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
