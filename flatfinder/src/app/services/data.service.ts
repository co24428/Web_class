import { Injectable } from '@angular/core';
import { Flat } from '../models/flat';

// this file's role move to flat.service.ts
// TODO: Should be deleted
@Injectable({
  providedIn: 'root'
})
export class DataService {
  flats: Flat[] = [
    { id: '1', city: 'Toronto', streetName: 'Main', streetNumber: 2233, areaSize: 900, hasAC: true, yearBuilt: 1999 , rentPrice: 1200, dateAvailable: new Date(2025,3,14) , owner: 'user1', imgLink: '/assets/flats/flat1.png' },
    { id: '2', city: 'Vancouver', streetName: 'Granville', streetNumber: 113, areaSize: 1200, hasAC: false, yearBuilt: 2010 , rentPrice: 1500, dateAvailable: new Date(2025,2,14) , owner: 'user2', imgLink: '/assets/flats/flat2.png' },
    { id: '3', city: 'Vancouver', streetName: 'Howe', streetNumber: 333, areaSize: 1500, hasAC: true, yearBuilt: 2013 , rentPrice: 1400, dateAvailable: new Date(2025,3,2) , owner: 'user3', imgLink: '/assets/flats/flat3.png' },
    { id: '4', city: 'Montreal', streetName: 'this', streetNumber: 421, areaSize: 900, hasAC: false, yearBuilt: 1988 , rentPrice: 1000, dateAvailable: new Date(2025,2,10) , owner: 'user1', imgLink: '/assets/flats/flat1.png' },
    // { city: 'Montreal', rentPrice: 1000, areaSize: 800, owner: 'user3' },
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
