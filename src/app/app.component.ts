import { Component } from '@angular/core';

import { DatabindingComponent } from './databinding';

@Component({
  moduleId: 'module.id',
  selector: 'app-root',
  template: `
    <h1>Root Component</h1>
    <fa-databinding></fa-databinding>
  `,
    directives: [DatabindingComponent]
})
export class AppComponent {
}
