import { Component, input } from '@angular/core';
import { SocialLink } from '../../models/portfolio.models';

@Component({
  selector: 'app-social-links',
  standalone: true,
  template: `
    <ul class="socials" [class.socials--lg]="size() === 'lg'">
      @for (link of links(); track link.label) {
        <li>
          <a
            [href]="link.url"
            target="_blank"
            rel="noopener noreferrer"
            [attr.aria-label]="link.label"
            class="social"
          >
            @switch (link.icon) {
              @case ('github') {
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M12 2C6.477 2 2 6.586 2 12.253c0 4.53 2.865 8.37 6.839 9.723.5.094.682-.222.682-.482 0-.237-.009-.866-.014-1.7-2.782.617-3.369-1.37-3.369-1.37-.454-1.18-1.11-1.494-1.11-1.494-.908-.635.069-.622.069-.622 1.003.072 1.53 1.056 1.53 1.056.892 1.56 2.341 1.11 2.91.849.09-.66.35-1.11.636-1.366-2.22-.258-4.555-1.136-4.555-5.056 0-1.117.39-2.03 1.03-2.747-.103-.259-.447-1.3.098-2.71 0 0 .84-.275 2.75 1.049A9.35 9.35 0 0 1 12 6.844a9.35 9.35 0 0 1 2.504.345c1.909-1.324 2.748-1.05 2.748-1.05.547 1.41.203 2.452.1 2.71.64.717 1.028 1.63 1.028 2.747 0 3.93-2.338 4.795-4.566 5.048.359.316.679.942.679 1.9 0 1.371-.012 2.477-.012 2.814 0 .262.18.58.688.48A10.27 10.27 0 0 0 22 12.253C22 6.586 17.523 2 12 2z"
                  />
                </svg>
              }
              @case ('linkedin') {
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              }
              @case ('email') {
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 7 9-7" />
                </svg>
              }
            }
          </a>
        </li>
      }
    </ul>
  `,
  styles: [
    `
      .socials {
        display: flex;
        align-items: center;
        gap: 0.65rem;
      }

      .social {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: var(--radius-full);
        border: 1px solid var(--border-default);
        color: var(--text-secondary);
        background: var(--bg-input);
        transition:
          color var(--duration-base) var(--ease-out),
          border-color var(--duration-base) var(--ease-out),
          transform var(--duration-fast) var(--ease-out);
      }

      .socials--lg .social {
        width: 2.85rem;
        height: 2.85rem;
      }

      .social:hover {
        color: var(--color-accent);
        border-color: var(--color-accent);
        transform: translateY(-2px);
      }

      .social:focus-visible {
        outline: 2px solid var(--color-accent);
        outline-offset: 3px;
      }

      svg {
        width: 1.1rem;
        height: 1.1rem;
      }
    `,
  ],
})
export class SocialLinksComponent {
  readonly links = input.required<SocialLink[]>();
  readonly size = input<'md' | 'lg'>('md');
}
