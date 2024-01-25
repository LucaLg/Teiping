import { Component, EventEmitter, Output, input } from '@angular/core';

@Component({
  selector: 'app-endscreen',
  standalone: true,
  imports: [],
  template: `
    <section
      class=" flex flex-col justify-evenly items-center outline-2 rounded-md shadow-lg "
    >
      <h1>Sie haben folgende Daten erreicht</h1>
      <p>Fehler: {{ errors() }}</p>
      <p>Wortanzahl: {{ wordCount() }}</p>
      <p>WPM: {{ wpm() }}</p>
      <button (click)="restart.emit()">Restart</button>
    </section>
  `,
  styles: `
  :host {
    position: absolute;
    background: #fff;
    z-index: 100;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)

  }
  `,
})
export class EndscreenComponent {
  @Output() restart = new EventEmitter<void>();
  errors = input.required<number>();
  wordCount = input.required<number>();
  wpm = input.required<number>();
}
