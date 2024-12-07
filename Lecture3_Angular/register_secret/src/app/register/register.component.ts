import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  registerForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(4)]],

  });
  onSubmit() {
    let { username, password }: any = (this.registerForm.value);

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('register successed');
  }
  ngOnInit(): void {}
}
