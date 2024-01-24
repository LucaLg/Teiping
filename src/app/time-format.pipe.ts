import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
  standalone: true,
})
export class TimeFormatPipe implements PipeTransform {
  transform(ms: number): string {
    const seconds = Math.floor((ms / 1000) % 60);
    const milliseconds = Math.floor((ms % 1000) / 10);
    const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const millisecondsString =
      milliseconds < 10 ? `0${milliseconds}` : `${milliseconds}`;
    return `${secondsString}:${millisecondsString}`;
  }
}
