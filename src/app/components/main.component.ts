import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: "main-comp",
  standalone: true,
  imports: [CommonModule],
  template: `
    main
  `
})
export class MainComponent {
  title = 'MainComp';
}
