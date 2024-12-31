import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Flat } from '../../models/flat';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  flats: Flat[] = [];
  filteredFlats: Flat[] = [];
  filter = {
    city: '',
    maxPrice: Infinity,
    showFavorites: false,
  };

  constructor(private dataService: DataService) {
    this.flats = this.dataService.getFlats();
    this.filteredFlats = [...this.flats];
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

  toggleFavorite(flat: Flat) {
    flat.isFavorite = !flat.isFavorite;
  }
}