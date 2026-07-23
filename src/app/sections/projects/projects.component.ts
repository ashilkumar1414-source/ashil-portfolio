import { Component, computed, signal } from '@angular/core';
import { PROJECTS } from '../../data/portfolio.data';
import { ProjectFilter } from '../../shared/models/portfolio.models';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { RevealDirective } from '../../core/directives/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionHeaderComponent, ButtonComponent, RevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly filters: ProjectFilter[] = ['All', 'Angular', 'AI', 'Dashboard', 'SaaS'];
  readonly activeFilter = signal<ProjectFilter>('All');
  readonly projects = PROJECTS;

  readonly filtered = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'All') return this.projects;
    return this.projects.filter((p) => p.filters.includes(filter));
  });

  setFilter(filter: ProjectFilter): void {
    this.activeFilter.set(filter);
  }
}
