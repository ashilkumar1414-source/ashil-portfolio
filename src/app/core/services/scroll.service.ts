import { Injectable, signal, PLATFORM_ID, inject, DestroyRef } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';
import { auditTime } from 'rxjs/operators';
import { NAV_LINKS } from '../../data/portfolio.data';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly scrolled = signal(false);
  readonly activeSection = signal('home');

  init(): void {
    if (!this.isBrowser) return;

    this.updateState();

    fromEvent(window, 'scroll', { passive: true })
      .pipe(auditTime(50), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.updateState());
  }

  scrollTo(id: string): void {
    if (!this.isBrowser) return;
    const el = this.document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  private updateState(): void {
    this.scrolled.set(window.scrollY > 24);
    this.activeSection.set(this.detectActiveSection());
  }

  private detectActiveSection(): string {
    const offset = 120;
    let current = NAV_LINKS[0].id;

    for (const link of NAV_LINKS) {
      const el = this.document.getElementById(link.id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top;
      if (top - offset <= 0) {
        current = link.id;
      }
    }

    return current;
  }
}
