import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { AboutComponent } from './sections/about/about.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { AngularFocusComponent } from './sections/angular-focus/angular-focus.component';
import { ProcessComponent } from './sections/process/process.component';
import { WhyMeComponent } from './sections/why-me/why-me.component';
import { ContactComponent } from './sections/contact/contact.component';
import { ThemeService } from './core/services/theme.service';
import { ScrollService } from './core/services/scroll.service';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    AngularFocusComponent,
    ProcessComponent,
    WhyMeComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly theme = inject(ThemeService);
  private readonly scroll = inject(ScrollService);

  ngOnInit(): void {
    // Ensure theme effect runs and scroll tracking is active
    void this.theme.theme();
    this.scroll.init();
  }
}
