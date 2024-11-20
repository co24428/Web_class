import { Component } from '@angular/core';
import {SimpleFormComponent} from './components/reactive/simple-form/simple-form.component'
import {GroupFormControlComponent} from './components/reactive/group-form-control/group-form-control.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SimpleFormComponent, GroupFormControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form_example';
}
