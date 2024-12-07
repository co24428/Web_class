import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // for ngClass, ngStyle

import { PlusButtonComponent } from './plus-button/plus-button.component';
import { MinusButtonComponent } from './minus-button/minus-button.component';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    PlusButtonComponent,
    MinusButtonComponent,
    CounterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'plus_minus';
  counter: number = 0;

  changeCounter(num:number){
    this.counter += num;
  }
  reset(){
    this.counter = 0;
  }
}
