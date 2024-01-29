import { Component, EventEmitter, Output, inject, input } from '@angular/core';
import { WordService } from '../word.service';

@Component({
  selector: 'app-endscreen',
  standalone: true,
  imports: [],
  template: `
    <section
      class=" flex w-2/5 flex-col items-center justify-evenly gap-4 rounded-md bg-white  p-8 shadow-lg  outline-2"
    >
      <section class="flex w-full flex-row justify-evenly">
        <div>
          <span class="font-geist text-2xl">Fehler:</span>
          <span class="font-tech text-2xl"> {{ wordService.errors() }}</span>
        </div>
        <div>
          <span class="font-geist text-2xl">Wortanzahl:</span>
          <span class="font-tech text-2xl">
            {{ wordService.wordCount() }}
          </span>
        </div>
        <div>
          <span class="font-geist text-2xl">WPM:</span>
          <span class="font-tech text-2xl">
            {{ wordService.wpm() }}
          </span>
        </div>
      </section>
      <section>
        <button
          class="flex size-16 items-center justify-center  rounded-full outline outline-black"
          (click)="restart.emit()"
        >
          <img src="../assets/icons/restart.svg" alt="Restart" />
        </button>
      </section>
    </section>
  `,
  styles: `:host {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
}
  `,
})
export class EndscreenComponent {
  @Output() restart = new EventEmitter<void>();
  wordService = inject(WordService);
}
