import { Component, EventEmitter, Output, input } from '@angular/core';

@Component({
  selector: 'app-endscreen',
  standalone: true,
  imports: [],
  template: `
    <section
      class=" flex flex-col items-center justify-evenly rounded-md bg-white p-4 shadow-lg outline-2 "
    >
      <h1>Sie haben folgende Daten erreicht</h1>
      <p>Fehler: {{ errors() }}</p>
      <p>Wortanzahl: {{ wordCount() }}</p>
      <p>WPM: {{ wpm() }}</p>
      <button (click)="restart.emit()">Restart</button>
    </section>
  `,
  styles: `:host {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
}
  `,
})
export class EndscreenComponent {
  @Output() restart = new EventEmitter<void>();
  errors = input.required<number>();
  wordCount = input.required<number>();
  wpm = input.required<number>();
}
