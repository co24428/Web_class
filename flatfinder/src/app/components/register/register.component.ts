import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { RouterModule, Router, RouterLink } from '@angular/router';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { AuthService } from '../../services/auth.service';
import { FirebaseService } from '../../services/firebase.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  firstName = new FormControl('', [Validators.required, Validators.minLength(2)]);
  lastName = new FormControl('', [Validators.required, Validators.minLength(2)]);
  birthDate = new FormControl('', [Validators.required]);

  constructor(private firestore: Firestore, private firebaseService: FirebaseService, private router: Router) { }

  async onRegister() {
    if (
      this.email.invalid ||
      this.password.invalid ||
      this.firstName.invalid ||
      this.lastName.invalid ||
      this.birthDate.invalid
    ) {
      alert('Please fill in all fields correctly.');
      return;
    }
    try {
      // Sign up the user using Firebase Authentication
      const userCredential = await this.firebaseService.signup(
        this.email.value!,
        this.password.value!
      );

      // Get the unique Firebase UID
      const uid = userCredential.user?.uid;

      // Save additional user data to Firestore
      const user = {
        uid,
        email: this.email.value!,
        password: this.password.value!,
        firstName: this.firstName.value!,
        lastName: this.lastName.value!,
        birthDate: new Date(this.birthDate.value!),
        isAdmin: 'true',
        favouriteFlats: []
      }

      const usersCollection = collection(this.firestore, 'users');
      await addDoc(usersCollection, user);

      // Navigate to a success page or home page
      alert('Registration successful!');
      this.router.navigate(['/home']);
    } catch (error) {
      alert('Registration failed. Please try again.');
    }
  }
}