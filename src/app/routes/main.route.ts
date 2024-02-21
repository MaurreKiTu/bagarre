import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../components/main.component';

@Component({
  standalone: true,
  imports: [CommonModule, MainComponent],
  template: `
    <main-comp/>
  `
})
export default class MainRoute {
  title = 'main-route';
}
