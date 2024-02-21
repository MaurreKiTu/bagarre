import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RulesComponent } from '../components/rules.component';

@Component({
  standalone: true,
  imports: [CommonModule, RulesComponent],
  template: `
    <rules-comp/>
  `
})
export default class RulesRoute {
  title = 'rules-route';
}
