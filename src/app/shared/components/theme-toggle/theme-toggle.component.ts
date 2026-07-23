import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  template: `
    <button
      type="button"
      class="theme-toggle"
      [attr.aria-label]="theme.theme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
      (click)="theme.toggle()"
    >
      @if (theme.theme() === 'dark') {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      } @else {
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
          <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5z" />
        </svg>
      }
    </button>
  `,
  styles: [
    `
      .theme-toggle {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: var(--radius-full);
        border: 1px solid var(--border-default);
        background: var(--bg-input);
        color: var(--text-secondary);
        cursor: pointer;
        transition:
          color var(--duration-base) var(--ease-out),
          border-color var(--duration-base) var(--ease-out),
          background var(--duration-base) var(--ease-out);
      }

      .theme-toggle:hover {
        color: var(--text-primary);
        border-color: var(--border-strong);
      }

      .theme-toggle:focus-visible {
        outline: 2px solid var(--color-accent);
        outline-offset: 3px;
      }

      svg {
        width: 1.15rem;
        height: 1.15rem;
      }
    `,
  ],
})
export class ThemeToggleComponent {
  readonly theme = inject(ThemeService);
}
