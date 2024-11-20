import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-group-form-control',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './group-form-control.component.html',
  styleUrl: './group-form-control.component.css'
})
export class GroupFormControlComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  onSubmit() {console.warn(this.profileForm.value);}
  constructor () {}
  ngOnInit(): void {}
}
