import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Flat } from '../../models/flat';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { FlatService } from '../../services/flat.service';
import { Firestore, collection, doc, getDocs, query, updateDoc, where } from '@angular/fire/firestore';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  flats: Flat[] = [];
  filteredFlats: Flat[] = [];
  filter = {
    city: '',
    maxPrice: Infinity,
    showFavorites: false,
  };

  ngOnInit(): void {
    this.getAllFlats();
  }
  constructor(private dataService: DataService, private userService: UserService, private flatService: FlatService) { }

  async getAllFlats(): Promise<void> {
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
      this.filteredFlats = [...this.flats];
    });
  }

  applyFilters() {
    this.filteredFlats = this.flats.filter(flat =>
      flat.city.toLowerCase().includes(this.filter.city.toLowerCase()) &&
      (this.filter.maxPrice === 0 || flat.rentPrice <= this.filter.maxPrice) &&
      (!this.filter.showFavorites || flat.isFavorite)
    );
    if (!this.filter.maxPrice) {
      this.filter.maxPrice = Infinity;
    }
  }

  clearFilters() {
    this.filter = { city: '', maxPrice: Infinity, showFavorites: false };
    this.filteredFlats = [...this.flats];
  }

  toggleFavourite(flatId: string): void {
    if (this.userService.isFavourite(flatId)) {
      this.userService.removeFavourite(flatId);
    } else {
      this.userService.addFavourite(flatId);
    }
  }

  isFavourite(flatId: string): boolean {
    return this.userService.isFavourite(flatId);
  }
}