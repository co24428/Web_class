import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  registerForm = this.fb.group({
    firstName:['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    country:  ['', [Validators.required, Validators.minLength(5)]],
    note:     ['', [Validators.required, Validators.minLength(10)]],

  });
  onSubmit() {
    console.warn(this.registerForm.value);
  }
  reset(){
    this.registerForm.patchValue({
      firstName: '',
      lastName: '',
      country: '',
      note: ''
    });
  }
  ngOnInit(): void {}
}
