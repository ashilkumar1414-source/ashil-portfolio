import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../data/portfolio.data';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { SocialLinksComponent } from '../../shared/components/social-links/social-links.component';
import { RevealDirective } from '../../core/directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SectionHeaderComponent,
    ButtonComponent,
    SocialLinksComponent,
    RevealDirective,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  readonly contact = CONTACT_INFO;
  readonly socials = [
    ...SOCIAL_LINKS,
    { label: 'Email', url: `mailto:${CONTACT_INFO.email}`, icon: 'email' as const },
  ];
  readonly submitted = signal(false);

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  get nameCtrl() {
    return this.form.controls.name;
  }

  get emailCtrl() {
    return this.form.controls.email;
  }

  get messageCtrl() {
    return this.form.controls.message;
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    const { name, email, message } = this.form.getRawValue();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `Hi Ashil,\n\n${message}\n\n—\n${name}\n${email}`,
    );

    window.location.href = `mailto:${this.contact.email}?subject=${subject}&body=${body}`;

    this.submitted.set(true);
    this.form.reset();
  }
}
