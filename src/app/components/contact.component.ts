import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: "contact-comp",
  standalone: true,
  imports: [CommonModule],
  template: `
    contact
  `
})
export class ContactComponent {
  title = '';
}
