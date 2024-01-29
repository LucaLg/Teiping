import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
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
import { NavComponent } from './nav/nav.component';
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
    NavComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(TimerComponent)
  timerComponent!: TimerComponent;
  @ViewChild('input') input!: ElementRef;

  title = 'teiping';
  wordService = inject(WordService);

  started: boolean = false;
  endScreen = false;

  time: number = 3000;

  constructor() {}
  ngOnInit(): void {
    if (localStorage.getItem('theme') === null) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } else {
      if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
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
    this.wordService.checkInput();
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
    this.input.nativeElement.focus();
    this.wordService.reset();
  }
}
