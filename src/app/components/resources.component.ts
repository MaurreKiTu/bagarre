import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: "resources-comp",
  standalone: true,
  imports: [CommonModule],
  template: `
    resources
  `
})
export class ResourcesComponent {
  title = 'ResourcesComp';
}
