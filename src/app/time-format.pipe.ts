import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
  standalone: true,
})
export class TimeFormatPipe implements PipeTransform {
  transform(ms: number): string {
    const seconds = Math.floor((ms / 1000) % 60);
    const milliseconds = ms % 1000;

    return `${seconds}.${milliseconds}`;
  }
}
