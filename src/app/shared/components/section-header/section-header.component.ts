import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  template: `
    <header class="section-header" [class.section-header--center]="align() === 'center'">
      @if (eyebrow()) {
        <p class="eyebrow">{{ eyebrow() }}</p>
      }
      <h2>{{ title() }}</h2>
      @if (subtitle()) {
        <p class="lead">{{ subtitle() }}</p>
      }
    </header>
  `,
  styles: [
    `
      .section-header {
        margin-bottom: var(--space-8);
        max-width: 40rem;
      }

      .section-header--center {
        text-align: center;
        margin-inline: auto;
      }

      .section-header--center .lead {
        margin-inline: auto;
      }

      .eyebrow {
        margin: 0 0 var(--space-3);
      }

      h2 {
        margin: 0 0 var(--space-4);
        font-size: clamp(1.85rem, 3.5vw, 2.75rem);
      }

      .lead {
        margin: 0;
      }
    `,
  ],
})
export class SectionHeaderComponent {
  readonly eyebrow = input('');
  readonly title = input.required<string>();
  readonly subtitle = input('');
  readonly align = input<'left' | 'center'>('left');
}
