import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wheel-comp',
  standalone: true,
  imports: [CommonModule],
  template: ` c'est la roue `,
})
export class WheelComponent {
  title = 'WheelComp';
}
