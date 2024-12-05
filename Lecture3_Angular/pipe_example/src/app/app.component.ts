import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReversePipe } from './reverse.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReversePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipe_example';
}
