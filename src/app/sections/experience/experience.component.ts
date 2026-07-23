import { Component } from '@angular/core';
import { EXPERIENCE } from '../../data/portfolio.data';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { RevealDirective } from '../../core/directives/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionHeaderComponent, RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly experience = EXPERIENCE;
}
