import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { Flat } from '../../../models/flat';

@Component({
  selector: 'app-myflats',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './myflats.component.html',
  styleUrl: './myflats.component.css'
})
export class MyflatsComponent {
  myFlats: Flat[] = [];

  constructor(private dataService: DataService) {
    // Assume the logged-in user's ID is 'user1' for now
    const userId = 'user1';
    this.myFlats = this.dataService.getFlats().filter(flat => flat.owner === userId);
  }

  addNewFlat() {
    console.log('Navigating to the New Flat page...');
    // Navigate to the New Flat page (use a router or appropriate logic)
  }

  editFlat(flatId: string) {
    console.log(`Editing flat with ID: ${flatId}`);
    // Navigate to the Edit Flat page or display a form for editing
  }

  deleteFlat(flatId: string) {
    console.log(`Deleting flat with ID: ${flatId}`);
    this.dataService.deleteFlat(flatId);
    this.myFlats = this.myFlats.filter(flat => flat.id !== flatId);
  }
}