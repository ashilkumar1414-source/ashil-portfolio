import { Component, input, output } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    @if (href()) {
      <a
        class="btn"
        [class]="'btn btn--' + variant() + ' btn--' + size()"
        [class.btn--full]="fullWidth()"
        [href]="href()"
        [attr.target]="external() ? '_blank' : null"
        [attr.rel]="external() ? 'noopener noreferrer' : null"
        [attr.download]="download() === true ? '' : download() || null"
        [attr.aria-label]="ariaLabel() || null"
      >
        <ng-content />
      </a>
    } @else {
      <button
        class="btn"
        [class]="'btn btn--' + variant() + ' btn--' + size()"
        [class.btn--full]="fullWidth()"
        [type]="type()"
        [disabled]="disabled()"
        [attr.aria-label]="ariaLabel() || null"
        (click)="clicked.emit($event)"
      >
        <ng-content />
      </button>
    }
  `,
  styles: [
    `
      :host {
        display: inline-flex;
      }

      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        font-family: var(--font-body);
        font-weight: 600;
        letter-spacing: 0.01em;
        border-radius: var(--radius-full);
        border: 1px solid transparent;
        cursor: pointer;
        text-decoration: none;
        transition:
          transform var(--duration-fast) var(--ease-out),
          background var(--duration-base) var(--ease-out),
          border-color var(--duration-base) var(--ease-out),
          box-shadow var(--duration-base) var(--ease-out),
          color var(--duration-base) var(--ease-out);
        white-space: nowrap;
      }

      .btn:focus-visible {
        outline: 2px solid var(--color-accent);
        outline-offset: 3px;
      }

      .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .btn:not(:disabled):hover {
        transform: translateY(-1px);
      }

      .btn:not(:disabled):active {
        transform: translateY(0);
      }

      .btn--sm {
        padding: 0.5rem 1rem;
        font-size: var(--fs-sm);
      }

      .btn--md {
        padding: 0.7rem 1.35rem;
        font-size: var(--fs-sm);
      }

      .btn--lg {
        padding: 0.9rem 1.65rem;
        font-size: var(--fs-base);
      }

      .btn--full {
        width: 100%;
      }

      .btn--primary {
        background: var(--gradient-accent);
        color: #fff;
        box-shadow: 0 8px 24px rgba(225, 29, 72, 0.28);
      }

      .btn--primary:not(:disabled):hover {
        box-shadow: 0 12px 28px rgba(225, 29, 72, 0.38);
      }

      .btn--secondary {
        background: var(--bg-elevated);
        border-color: var(--border-default);
        color: var(--text-primary);
      }

      .btn--secondary:not(:disabled):hover {
        border-color: var(--border-strong);
        background: var(--bg-card);
      }

      .btn--outline {
        background: transparent;
        border-color: var(--border-default);
        color: var(--text-primary);
      }

      .btn--outline:not(:disabled):hover {
        border-color: var(--color-accent);
        color: var(--color-accent);
      }

      .btn--ghost {
        background: transparent;
        color: var(--text-secondary);
      }

      .btn--ghost:not(:disabled):hover {
        color: var(--text-primary);
        background: var(--bg-input);
      }
    `,
  ],
})
export class ButtonComponent {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('md');
  readonly href = input<string | undefined>(undefined);
  readonly type = input<'button' | 'submit'>('button');
  readonly disabled = input(false);
  readonly fullWidth = input(false);
  readonly external = input(false);
  readonly download = input<string | boolean>(false);
  readonly ariaLabel = input<string>('');
  readonly clicked = output<MouseEvent>();
}
