import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newflat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './newflat.component.html',
  styleUrl: './newflat.component.css'
})
export class NewflatComponent {
  flat = {city: '', rentPrice: 0, areaSize: 0};
  onSubmit(){
    console.log("New Flat", this.flat);
  }
}
