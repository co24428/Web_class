import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // for ngClass, ngStyle

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'plus_minus';
  count: number = 0;

  changeCount(num:number){
    this.count += num;
  }
}
