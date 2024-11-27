import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-group-form-control',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './group-form-control.component.html',
  styleUrl: './group-form-control.component.css'
})




export class GroupFormControlComponent implements OnInit {
  constructor (private fb: FormBuilder) {}
  logErrors() {
    console.log(this.profileForm.controls['firstName'].errors);
    console.log(this.profileForm.controls['lastName'].errors);
  }

  // formBuilder is much more simpler
  profileForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(4)]],
    lastName: ['', [Validators.required, Validators.minLength(4)]],
    address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
        zip: ['']
    })
  });

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //       street: new FormControl(''),
  //       city: new FormControl(''),
  //       state: new FormControl(''),
  //       zip: new FormControl('')
  //   })
  // });

  onSubmit() {console.warn(this.profileForm.value);}
  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Ariel',
      address: { street: '123 W Hastings St'}
    });
  }
  ngOnInit(): void {}
}
