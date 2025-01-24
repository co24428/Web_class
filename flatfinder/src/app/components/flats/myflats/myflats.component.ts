import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';
import { AuthService } from '../../../services/auth.service';
import { FlatService } from '../../../services/flat.service';
import { Flat } from '../../../models/flat';
import { RouterModule, Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-myflats',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './myflats.component.html',
  styleUrl: './myflats.component.css'
})
export class MyflatsComponent {
  flats: Flat[] = [];
  myFlats: Flat[] = [];

  ngOnInit(): void {
    this.getMyFlats()
  }
  constructor(private dataService: DataService, private router: Router, private authService: AuthService, private flatService: FlatService) { }

  async getMyFlats(): Promise<void> {
    const userName = this.authService.getCurrentUser()?.firstName;
    const querySnapshot = await this.flatService.fetchAllFlats();
    querySnapshot.forEach((doc: { id: string; data: () => any }) => {
      const data = doc.data();
      
      const tmpFlat: Flat = {
        id: data['id'],
        city: data['city'],
        streetName: data['streetName'],
        streetNumber: data['streetNumber'],
        areaSize: data['areaSize'],
        hasAC: data['hasAC'],
        yearBuilt: data['yearBuilt'],
        rentPrice: data['rentPrice'],
        dateAvailable: data['dateAvailable'].toDate(),
        owner: data['owner'],
        imgLink: data['imgLink'],
        isFavorite: data['isFavorite'] ?? false // Default: false
      };
      this.flats.push(tmpFlat);
    });
    this.myFlats = this.flats.filter(flat => { return flat.owner === userName; });
  }
  
  addNewFlat() {
    this.router.navigate(['/flats/newflat']);
  }

  editFlat(flatId: string) {
    console.log(`Editing flat with ID: ${flatId}`);
  }

  deleteFlat(flatId: string) {
    console.log(`Deleting flat with ID: ${flatId}`);
    this.dataService.deleteFlat(flatId);
    this.myFlats = this.myFlats.filter(flat => flat.id !== flatId);
  }
}