import { Injectable } from '@angular/core';
import { Flat } from '../models/flat';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  flats: Flat[] = [
    { id: '1', city: 'Toronto', rentPrice: 1200, areaSize: 900, owner: 'user1' },
    { id: '2', city: 'Vancouver', rentPrice: 1500, areaSize: 850, owner: 'user2' },
    { id: '3', city: 'Montreal', rentPrice: 1000, areaSize: 800, owner: 'user3' },
  ];

  getFlats() {
    return this.flats;
  }

  addFlat(flat: Flat) {
    this.flats.push(flat);
  }

  deleteFlat(flatId: string) {
    const index = this.flats.findIndex(flat => flat.id === flatId);
    if (index > -1) this.flats.splice(index, 1);
  }

  constructor() { }
}
