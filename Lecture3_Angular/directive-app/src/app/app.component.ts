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

  spends: any[] = [
    { price: 15.70, place: 'Loblaws'},
    { price: 11.20, place: 'HMart'},
    { price: 3.99, place: 'Rexall'}
  ]

  isActive = true;
  toggleImage(){
    this.isActive = !this.isActive;
  }
}
