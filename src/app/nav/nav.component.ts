import { Component, inject } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  template: `
    <div
      class="dark:white flex h-12 w-screen flex-row items-center justify-end  px-6  dark:bg-black"
    >
      <div
        class="flex h-8 w-8 items-center justify-center rounded-full bg-white "
      >
        <button (click)="toggleMode()">
          @if (themeService.theme() === 'light') {
            <img src="../assets/icons/half-moon.svg" alt="Black" />
          } @else {
            <img src="../assets/icons/sun-light.svg" alt="Light" />
          }
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export class NavComponent {
  themeService = inject(ThemeService);

  toggleMode() {
    if (localStorage.getItem('theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      console.log('toggle');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    this.themeService.theme.set(localStorage.getItem('theme')!);
  }
}
