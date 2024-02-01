import { Injectable, effect, signal } from '@angular/core';
import { commonWords } from './words';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  errors = signal<number>(0);
  wpm = signal<number>(0);
  wordCount = signal<number>(0);
  currentWord = signal<string>('');
  userInput = signal<string>('');
  started = signal<boolean>(false);
  time = signal<number>(30000);
  constructor() {
    this.selectRandomWord();
  }
  checkInput() {
    if (this.currentWord() != this.userInput()) {
      this.checkErros(this.userInput());
    } else {
      this.wordCount.update((val) => ++val);
    }
    this.selectRandomWord();
    this.userInput.set('');
  }
  selectRandomWord() {
    this.currentWord.set(
      commonWords[Math.floor(Math.random() * commonWords.length)],
    );
  }
  /**
   * Checks the difference between the currentWord and the user input
   * @param input is the user input for given currentWords
   */
  checkErros(input: string) {
    const maxLength =
      input.length > this.currentWord().length
        ? this.currentWord().length
        : input.length;
    for (let i = 0; i < maxLength; i++) {
      if (input[i] !== this.currentWord()[i]) {
        this.errors.update((val) => ++val);
      }
    }
  }
  reset() {
    this.errors.set(0);
    this.wpm.set(0);
    this.wordCount.set(0);
    this.currentWord.set('');
    this.userInput.set('');
    this.started.set(false);
    this.selectRandomWord();
  }
}
