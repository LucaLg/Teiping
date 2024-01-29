import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { commonWords } from './words';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './timer/timer.component';
import { EndscreenComponent } from './endscreen/endscreen.component';
import { ErrorWidgetComponent } from './error-widget/error-widget.component';
import { WordService } from './word.service';
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
export class AppComponent implements AfterViewInit {
  @ViewChild(TimerComponent)
  timerComponent!: TimerComponent;

  @ViewChild('input') input!: ElementRef;
  title = 'teiping';
  wordService = inject(WordService);
  currentWord: string = '';
  userInput: string = '';

  errors: number = 0;
  started: boolean = false;
  endScreen = false;
  wpm: number = 0;
  wordCount: number = 0;

  time: number = 3000;

  constructor() {}
  ngAfterViewInit(): void {
    this.input.nativeElement.focus();
  }
  checkInput() {
    if (!this.wordService.started()) {
      this.wordService.started.set(true);
      this.timerComponent.startTimer();
    }
    this.input.nativeElement.selectionStart = 0;
    this.input.nativeElement.selectionEnd = 0;
    this.wordService.userInput.set(this.userInput.trim());
    console.log(this.wordService.userInput());
    this.wordService.checkInput();
    this.userInput = '';
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
    this.wordService.wpm.set(
      Math.round((this.wordService.wordCount() / this.time) * 60000),
    );
  }
  restart() {
    this.endScreen = false;
    this.timerComponent.timerValue = 0;
    this.input.nativeElement.selectionStart = 0;
    this.userInput = '';
    this.wordService.reset();
    this.input.nativeElement.focus();
  }
}
