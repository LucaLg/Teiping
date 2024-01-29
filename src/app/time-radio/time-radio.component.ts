import { Component, inject } from '@angular/core';
import { WordService } from '../word.service';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-time-radio',
  standalone: true,
  imports: [FormsModule, NgClass],
  template: `
    <div class="flex w-full flex-row justify-evenly gap-6  font-tech">
      <label
        class=" cursor-pointer rounded-md px-4 py-2 outline-dotted active:bg-gray-800 dark:text-white"
        [ngClass]="{
          'bg-gray-300 dark:bg-gray-700': wordService.time() === thirySeconds
        }"
      >
        <input
          type="radio"
          name="time"
          [value]="thirySeconds"
          class="hidden"
          [ngModel]="wordService.time()"
          (ngModelChange)="wordService.time.set($event)"
        />
        <span>30s</span>
      </label>

      <label
        class=" cursor-pointer rounded-md px-4 py-2 outline-dotted active:bg-gray-800 dark:text-white"
        [ngClass]="{
          'bg-gray-300  dark:bg-gray-700': wordService.time() === sixtySeconds
        }"
      >
        <input
          type="radio"
          [ngModel]="wordService.time()"
          (ngModelChange)="wordService.time.set($event)"
          name="time"
          [value]="sixtySeconds"
          class="appearance-none"
        />
        <span>60s</span>
      </label>

      <label
        class=" cursor-pointer rounded-md px-4  py-2 outline-dotted active:bg-gray-800 dark:text-white "
        [ngClass]="{
          ' bg-gray-300  dark:bg-gray-700': wordService.time() === ninetySeconds
        }"
      >
        <input
          type="radio"
          name="time"
          [value]="ninetySeconds"
          [ngModel]="wordService.time()"
          (ngModelChange)="wordService.time.set($event)"
          class="hidden"
        />
        <span>90s</span>
      </label>
    </div>
  `,
  styles: `
  `,
})
export class TimeRadioComponent {
  thirySeconds = 30000;
  sixtySeconds = 60000;
  ninetySeconds = 90000;

  wordService = inject(WordService);
}
