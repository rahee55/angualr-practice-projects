import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo-pro',
  imports: [],
  templateUrl: './demo-pro.component.html',
  styleUrl: './demo-pro.component.css'
})
export class DemoProComponent {
  @Input() message: string = 'hello'
}
