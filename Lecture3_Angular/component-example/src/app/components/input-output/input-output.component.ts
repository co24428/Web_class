import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css'
})
export class InputOutputComponent implements OnInit {
  @Input() name: string | undefined; // input data from parent
  @Output() deleteRequest = 
    new EventEmitter<string>(); //will fire from parent
  lineThrough = '';

  delete() {
    console.warn('Child says:',
      'emitting name deleteRequest with',
      this.name);
      this.deleteRequest.emit(this.name); // fire from parent
      this.lineThrough = this.lineThrough ? '' : 'line-through';
  }
  constructor() {}
  ngOnInit(): void {}
}
