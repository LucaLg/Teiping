import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { commonWords } from './words';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './timer/timer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, TimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild(TimerComponent)
  timerComponent!: TimerComponent;
  title = 'teiping';
  currentWord: string = '';
  input: string = '';
  errors: number = 0;
  started: boolean = false;
  time: number = 30000;

  constructor() {
    this.selectRandomWord();
  }
  checkInput() {
    if (!this.started) {
      this.started = true;
      this.timerComponent.startTimer();
    }
    this.input = this.input.trim();
    if (this.currentWord != this.input) {
      this.checkErros(this.input);
    }
    this.selectRandomWord();
    this.input = '';
  }
  selectRandomWord() {
    this.currentWord =
      commonWords[Math.floor(Math.random() * commonWords.length)];
  }
  checkErros(input: string) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== this.currentWord[i]) {
        this.errors++;
      }
    }
  }
}
