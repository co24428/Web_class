import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-minus-button',
  standalone: true,
  imports: [],
  templateUrl: './minus-button.component.html',
  styleUrl: './minus-button.component.css'
})
export class MinusButtonComponent implements OnInit {
  @Input() counter: number | undefined; // from parent
  @Output() counterEvent = new EventEmitter<number>(); // will do parent

  changeCounter(val: number) {
    this.counterEvent.emit(val);
  }


  constructor() {}
  ngOnInit(): void {}
}
