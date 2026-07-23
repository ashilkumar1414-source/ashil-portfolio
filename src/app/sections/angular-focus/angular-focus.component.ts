import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ANGULAR_POINTS } from '../../data/portfolio.data';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { RevealDirective } from '../../core/directives/reveal.directive';

@Component({
  selector: 'app-angular-focus',
  standalone: true,
  imports: [SectionHeaderComponent, RevealDirective, DecimalPipe],
  templateUrl: './angular-focus.component.html',
  styleUrl: './angular-focus.component.scss',
})
export class AngularFocusComponent {
  readonly points = ANGULAR_POINTS;
  readonly flow = ['Component', 'Service', 'API', 'State', 'UI'];
}
