import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { commonWords } from './words';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './timer/timer.component';
import { EndscreenComponent } from './endscreen/endscreen.component';
import { ErrorWidgetComponent } from './error-widget/error-widget.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    TimerComponent,
    EndscreenComponent,
    ErrorWidgetComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild(TimerComponent)
  timerComponent!: TimerComponent;

  @ViewChild('input') input!: ElementRef;
  title = 'teiping';
  currentWord: string = '';
  userInput: string = '';

  errors: number = 0;
  started: boolean = false;
  endScreen = false;
  wpm: number = 0;
  wordCount: number = 0;

  time: number = 30000;

  constructor() {
    this.selectRandomWord();
  }
  checkInput() {
    if (!this.started) {
      this.started = true;
      this.timerComponent.startTimer();
    }
    this.userInput = this.userInput.trim();
    if (this.currentWord != this.userInput) {
      this.checkErros(this.userInput);
    } else {
      this.wordCount++;
    }
    this.input.nativeElement.selectionStart = 0;
    this.input.nativeElement.selectionEnd = 0;
    this.selectRandomWord();
    this.userInput = '';
  }

  selectRandomWord() {
    this.currentWord =
      commonWords[Math.floor(Math.random() * commonWords.length)];
  }
  /**
   * Checks the difference between the currentWord and the user input
   * @param input is the user input for given currentWords
   */
  checkErros(input: string) {
    const maxLength =
      input.length > this.currentWord.length
        ? this.currentWord.length
        : input.length;
    for (let i = 0; i < maxLength; i++) {
      if (input[i] !== this.currentWord[i]) {
        this.errors++;
      }
    }
  }

  end() {
    this.endScreen = true;
    this.wpm = Math.round((this.wordCount / this.time) * 60000);
  }
  restart() {
    this.endScreen = false;
    this.started = false;
    this.errors = 0;
    this.wpm = 0;
    this.wordCount = 0;
    this.timerComponent.timerValue = 0;
  }
}
