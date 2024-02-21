import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from '../components/contact.component';

@Component({
  standalone: true,
  imports: [CommonModule, ContactComponent],
  template: `
    <contact-comp/>
  `
})
export default class ContactRoute {
  title = 'contact-route';
}
