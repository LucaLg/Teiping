import { Component, input } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { TimeFormatPipe } from '../time-format.pipe';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [TimeFormatPipe],
  template: ` <p>{{ timerValue | timeFormat }}</p> `,
  styles: ``,
})
export class TimerComponent {
  time = input.required<number>();
  private timerSubscription: Subscription = new Subscription();
  public timerValue: number = 0;
  interval = 10;

  startTimer() {
    this.timerSubscription = timer(0, 10).subscribe(() => {
      if (this.timerValue < this.time()) {
        this.timerValue += this.interval;
      } else {
        this.timerSubscription.unsubscribe(); // Stop the timer when it reaches 60 seconds
      }
    });
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe(); // Unsubscribe to avoid memory leaks
    }
  }
}
