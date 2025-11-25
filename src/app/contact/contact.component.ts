import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  loading = false;

  contactInfo = [
    {
      icon: '📞',
      title: 'Téléphone',
      value: '+224 XXX XX XX XX',
      link: 'tel:+224XXXXXXXXXX'
    },
    {
      icon: '✉️',
      title: 'Email',
      value: 'contact@kobaferronerie.com',
      link: 'mailto:contact@kobaferronerie.com'
    },
    {
      icon: '📍',
      title: 'Adresse',
      value: 'Conakry, Guinée',
      link: '#'
    },
    {
      icon: '🕐',
      title: 'Heures',
      value: 'Lun-Ven: 08:00-18:00',
      link: '#'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.contactForm.valid) {
      this.loading = true;
      console.log('Form submitted:', this.contactForm.value);
      
      setTimeout(() => {
        this.loading = false;
        this.submitted = false;
        this.contactForm.reset();
        alert('Merci! Nous vous contacterons bientôt.');
      }, 1500);
    }
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get phone() { return this.contactForm.get('phone'); }
  get subject() { return this.contactForm.get('subject'); }
  get message() { return this.contactForm.get('message'); }
}
