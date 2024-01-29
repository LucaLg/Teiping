import {
  Component,
  DestroyRef,
  EventEmitter,
  Output,
  inject,
  input,
} from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { TimeFormatPipe } from '../time-format.pipe';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [TimeFormatPipe],
  template: `
    <div
      class="text-whitel flex flex-col items-center justify-evenly gap-3 rounded-md p-4 shadow-lg outline-dotted outline-2 dark:bg-black dark:text-white dark:shadow-sm dark:shadow-white dark:outline-white  "
    >
      <p class="font-geist  tracking-wider">Time</p>
      <p class="font-tech text-4xl">{{ timerValue | timeFormat }}</p>
    </div>
  `,
  styles: ``,
})
export class TimerComponent {
  private destroyRef = inject(DestroyRef);
  time = input.required<number>();
  private timer$: Subscription = new Subscription();
  public timerValue: number = 0;
  interval = 10;
  @Output() timeEnd = new EventEmitter<void>();

  startTimer() {
    this.timer$ = timer(0, 10)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        if (this.timerValue < this.time()) {
          this.timerValue += this.interval;
        } else {
          this.timeEnd.emit();
          this.timer$.unsubscribe(); // Stop the timer when it reaches 60 seconds
        }
      });
  }
}
