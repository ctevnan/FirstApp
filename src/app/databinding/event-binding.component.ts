import { Component } from '@angular/core';

@Component({
  moduleId: 'module.id',
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClicked()">Click me</button> 
  `,
  styles: []
})
export class EventBindingComponent {
  onClicked() {
  alert('It worked');
  }
}