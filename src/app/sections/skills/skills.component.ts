import { Component } from '@angular/core';
import { SKILL_CATEGORIES } from '../../data/portfolio.data';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { RevealDirective } from '../../core/directives/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeaderComponent, RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly categories = SKILL_CATEGORIES;

  delayFor(index: number): 0 | 1 | 2 | 3 | 4 {
    return Math.min(index + 1, 4) as 0 | 1 | 2 | 3 | 4;
  }
}
