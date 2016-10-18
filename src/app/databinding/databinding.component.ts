import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: 'module.id',
  selector: 'fa-databinding',
  templateUrl: 'databinding.component.html',
  styleUrls: ['databinding.component.css']
})
export class DatabindingComponent {
  stringInterpolation = 'This is string interpolation';
  numberInterpolation = 2;
}