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
  template: ` <p class="font-tech text-xl">{{ timerValue | timeFormat }}</p> `,
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
