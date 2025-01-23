import { Injectable } from '@angular/core';
// import { User } from '../models/user.model';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser: User | null = null;

  constructor() {
    // For testing, create a dummy user
    this.currentUser = new User(
      'test',
      'test@example.com',
      'password123',
      'John',
      'Doe',
      new Date('1990-01-01'),
      false,
      [] // Start with no favourites
    );
    // this.tmpUser = new User(
    //   ''
    // )
  }

  // Add a flat to the user's favourite list
  addFavourite(flatId: string): void {
    if (this.currentUser && !this.currentUser.favouriteFlats.includes(flatId)) {
      this.currentUser.favouriteFlats.push(flatId);
      console.log(`Flat ${flatId} added to favourites.`);
    }
  }

  // Remove a flat from the user's favourite list
  removeFavourite(flatId: string): void {
    if (this.currentUser) {
      this.currentUser.favouriteFlats = this.currentUser.favouriteFlats.filter(
        (id) => id !== flatId
      );
      console.log(`Flat ${flatId} removed from favourites.`);
    }
  }

  // Check if a flat is in the user's favourite list
  isFavourite(flatId: string): boolean {
    return (
      this.currentUser?.favouriteFlats.includes(flatId) ?? false
    );
  }
}