import { Component, EventEmitter, Output, input } from '@angular/core';

@Component({
  selector: 'app-endscreen',
  standalone: true,
  imports: [],
  template: `
    <h1>End screen</h1>
    <p>Errors: {{ errors() }}</p>
    <p>Word count: {{ wordCount() }}</p>
    <p>WPM: {{ wpm() }}</p>
    <button (click)="restart.emit()">Restart</button>
  `,
  styles: ``,
})
export class EndscreenComponent {
  @Output() restart = new EventEmitter<void>();
  errors = input.required<number>();
  wordCount = input.required<number>();
  wpm = input.required<number>();
}
