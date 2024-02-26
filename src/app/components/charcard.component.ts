import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: "charcard-comp",
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 class="card-title justify-center bg-slate-600 rounded-t-lg p-2">{{name}}</h2>
    <div class="flex flex-row">
      <figure class="w-1/3 p-6"><img src="../assets/img/{{img}}" alt={{name}} /></figure>
      <div class="card-body w-2/3 text-black">
        <p>{{descr}}</p>
      </div>
    </div>
  `
})
export class CharcardComponent {
  title = '';
  @Input() name = "";
  @Input() img = "";
  @Input() descr = "";
}
