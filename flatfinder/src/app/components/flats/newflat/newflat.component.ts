import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Flat } from '../../../models/flat';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-newflat',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './newflat.component.html',
  styleUrl: './newflat.component.css'
})
export class NewflatComponent {
  flatForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firestore: Firestore,
    private router: Router,
    private authService: AuthService
  ) {
    this.flatForm = this.fb.group({
      city: ['', Validators.required],
      streetName: ['', Validators.required],
      streetNumber: [null, [Validators.required, Validators.min(1)]],
      areaSize: [null, [Validators.required, Validators.min(1)]],
      hasAC: [false], // Default to false
      yearBuilt: [null, [Validators.required, Validators.min(1900)]],
      rentPrice: [null, [Validators.required, Validators.min(0)]],
      dateAvailable: [null, Validators.required],
      imgLink: ['', Validators.required]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.flatForm.valid) {
      // Create a Flat object from form values
      const newFlat: Flat = {
        id: '', // Firestore will generate this
        city: this.flatForm.value.city,
        streetName: this.flatForm.value.streetName,
        streetNumber: this.flatForm.value.streetNumber,
        areaSize: this.flatForm.value.areaSize,
        hasAC: this.flatForm.value.hasAC,
        yearBuilt: this.flatForm.value.yearBuilt,
        rentPrice: this.flatForm.value.rentPrice,
        dateAvailable: new Date(this.flatForm.value.dateAvailable), // Ensure Date object
        owner: String(this.authService.getCurrentUser()?.firstName),
        imgLink: this.flatForm.value.imgLink,
        isFavorite: false // Default to false for new entries
      };

      try {
        const flatsCollectionRef = collection(this.firestore, 'flats');
        await addDoc(flatsCollectionRef, newFlat);
        alert('Flat added successfully!');
        this.router.navigate(['/home']);
      } catch (error) {
        console.error('Error adding flat:', error);
        alert('Failed to add flat. Please try again.');
      }
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}
