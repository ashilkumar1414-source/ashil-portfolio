import { Component } from '@angular/core';
import { PROCESS_STEPS } from '../../data/portfolio.data';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { RevealDirective } from '../../core/directives/reveal.directive';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [SectionHeaderComponent, RevealDirective],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss',
})
export class ProcessComponent {
  readonly steps = PROCESS_STEPS;
}
