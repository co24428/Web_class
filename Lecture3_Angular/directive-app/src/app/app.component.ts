import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  number: number = 11;
  animal: string = 'fox';

  getCSSClasses(flag: string) {
    return flag == 'lightMode' ? 'one' : 'two'
  }
}
