import { Component, inject } from '@angular/core';
import { PROFILE, SOCIAL_LINKS } from '../../data/portfolio.data';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { SocialLinksComponent } from '../../shared/components/social-links/social-links.component';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonComponent, SocialLinksComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private readonly scroll = inject(ScrollService);
  readonly profile = PROFILE;
  readonly socials = SOCIAL_LINKS;

  viewWork(): void {
    this.scroll.scrollTo('projects');
  }

  connect(): void {
    this.scroll.scrollTo('contact');
  }
}
