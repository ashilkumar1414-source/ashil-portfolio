import { Component, inject } from '@angular/core';
import { PROFILE, SOCIAL_LINKS, CONTACT_INFO } from '../../data/portfolio.data';
import { SocialLinksComponent } from '../../shared/components/social-links/social-links.component';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private readonly scroll = inject(ScrollService);
  readonly name = PROFILE.name;
  readonly role = PROFILE.role;
  readonly year = new Date().getFullYear();
  readonly socials = [
    ...SOCIAL_LINKS,
    { label: 'Email', url: `mailto:${CONTACT_INFO.email}`, icon: 'email' as const },
  ];

  backToTop(): void {
    this.scroll.scrollTo('home');
  }
}
