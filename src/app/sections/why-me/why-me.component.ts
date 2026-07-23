import { Component } from '@angular/core';
import { WHY_CARDS } from '../../data/portfolio.data';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { RevealDirective } from '../../core/directives/reveal.directive';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [SectionHeaderComponent, RevealDirective],
  templateUrl: './why-me.component.html',
  styleUrl: './why-me.component.scss',
})
export class WhyMeComponent {
  readonly cards = WHY_CARDS;
}
