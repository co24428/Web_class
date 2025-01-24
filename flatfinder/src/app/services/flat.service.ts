import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, User as FirebaseUser } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { User } from '../models/user';
import { Flat } from '../models/flat';
import { collection, query, where, getDocs } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root',
})
export class FlatService {
  private currentUser: User | null = null;

  constructor(private auth: Auth, private firestore: Firestore) {}

    async login(email: string, password: string): Promise<boolean> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      this.getUserDetail(userCredential);
      return true;
    } catch (error) {
      console.error('Login failed', error);
      return false;
    }
  }
  async fetchAllFlats(): Promise<any> {
    try {
      const flatsCollectionRef = collection(this.firestore, 'flats'); // Reference to the 'users' collection
      const querySnapshot = await getDocs(flatsCollectionRef);
  
      return querySnapshot;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
  async getUserDetail(userCredential: any) {
    const userUid = userCredential.user.uid;
    const usersCollectionRef = collection(this.firestore, 'users');
    const q = query(usersCollectionRef, where('uid', '==', userCredential.user.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      this.currentUser= new User(
        '', // uid
        doc.data()['email'],
        '', // password
        doc.data()['firstName'],
        doc.data()['lastName'],
        doc.data()['birthDate'].toDate(),
        doc.data()['isAdmin'] === 'true' ? true : false,
        doc.data()['favouriteFlats']
      );
    });
  }
  // Check if the current user is logged in
  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  // Check if the current user is an admin
  isAdmin(): boolean {
    return this.currentUser?.isAdmin ?? false;
  }

  // Get the current user's details
  getCurrentUser(): User | null {
    return this.currentUser;
  }

  // Logout the user
  async logout(): Promise<void> {
    await signOut(this.auth);
    this.currentUser = null;
  }
}
