import { Component, inject, signal, HostListener } from '@angular/core';
import { NAV_LINKS, PROFILE } from '../../data/portfolio.data';
import { ScrollService } from '../../core/services/scroll.service';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeToggleComponent, ButtonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly scroll = inject(ScrollService);
  readonly links = NAV_LINKS;
  readonly name = PROFILE.name;
  readonly resumePath = PROFILE.resumePath;
  readonly resumeFileName = PROFILE.resumeFileName;
  readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  navigate(id: string, event?: Event): void {
    event?.preventDefault();
    this.closeMenu();
    this.scroll.scrollTo(id);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }
}
