import { Component } from '@angular/core';
import { PROFILE, STATS } from '../../data/portfolio.data';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { RevealDirective } from '../../core/directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeaderComponent, RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly profile = PROFILE;
  readonly stats = STATS;

  delayFor(index: number): 0 | 1 | 2 | 3 | 4 {
    return ((index % 4) + 1) as 0 | 1 | 2 | 3 | 4;
  }
}
