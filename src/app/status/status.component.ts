import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <h4>
      status works!
    </h4>
  `,
  styles: [
    "h4{color:green}"
  ]
})
export class StatusComponent {
  // ng g c Status --inline-style --inline-template
}
