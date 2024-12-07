import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent implements OnInit {
  @Input() name: string | undefined; // input from Parent Component, in this case, 'app.component.ts'
  @Output() newPersonEvent = new EventEmitter<string>(); // output to Parent Component

  constructor() {}
  
  ngOnInit(): void {}

  addNewPerson(val:string) {
    this.newPersonEvent.emit(val);
  }
}
