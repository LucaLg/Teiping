import { Component, input } from '@angular/core';

@Component({
  selector: 'app-error-widget',
  standalone: true,
  imports: [],
  template: `
    <div
      class="items-center gap-3 font-geist text-4xl rounded-md border bg-gray-300 p-2 flex flex-col justify-evenly"
    >
      <span>Fehler</span>
      <span>{{ errors() }}</span>
    </div>
  `,
  styles: ``,
})
export class ErrorWidgetComponent {
  errors = input.required<number>();
}
