import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { commonWords } from './words';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'teiping';
  currentWord: string = '';
  input: string = '';
  errors: number = 0;
  started: boolean = false;
  time: number = 0;

  constructor() {
    this.selectWord();
  }
  checkInput() {
    if (!this.started) {
      this.started = true;
      this.startTimer();
    }
    this.input = this.input.trim();
    if (this.currentWord != this.input) {
      this.checkErros(this.input);
    }
    this.selectWord();
    this.input = '';
  }
  startTimer() {
    setInterval(() => {
      if (this.started) {
        this.time++;
      }
    }, 1000);
  }
  stopTimer() {
    this.started = false;
  }
  selectWord() {
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
