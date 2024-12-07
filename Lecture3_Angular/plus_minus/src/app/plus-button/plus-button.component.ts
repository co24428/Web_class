import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plus-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plus-button.component.html',
  styleUrl: './plus-button.component.css'
})
export class PlusButtonComponent implements OnInit {
  @Input() counter: number | undefined; // from parent
  @Output() counterEvent = new EventEmitter<number>(); // will do parent

  changeCounter(val: number) {
    this.counterEvent.emit(val);
  }


  constructor() {}
  ngOnInit(): void {}
}
