import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourcesComponent } from '../components/resources.component';

@Component({
  standalone: true,
  imports: [CommonModule, ResourcesComponent],
  template: `
    <resources-comp/>
  `
})
export default class ResourcesRoute {
  title = 'resources-route';
}
