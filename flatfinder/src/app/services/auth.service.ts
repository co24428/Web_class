import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, User as FirebaseUser } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { User } from '../models/user';
import { collection, query, where, getDocs } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: User | null = null;
  private dummyUser: User | null = null;

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
  async fetchAllUsers(): Promise<any> {
    try {
      const usersCollectionRef = collection(this.firestore, 'users'); // Reference to the 'users' collection
      const querySnapshot = await getDocs(usersCollectionRef);
  
      // Loop through all documents in the collection
      // querySnapshot.forEach((doc) => {
      //   console.log(`Document ID: ${doc.id}`);
      //   console.log('Document Data:', doc.data());
      // });
      return querySnapshot;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
  async getUserDetail(userCredential: any) {
    const userUid = userCredential.user.uid;
    const usersCollectionRef = collection(this.firestore, 'users');
    const querySnapshot = await getDocs(usersCollectionRef);
    const q = query(usersCollectionRef, where('uid', '==', userCredential.user.uid));
    const querySnapshot2 = await getDocs(q);
    querySnapshot2.forEach((doc) => {
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
  // // Login and retrieve user details
  // async login(email: string, password: string): Promise<boolean> {
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(this.auth, email, password);

  //     // Fetch user details from Firestore
  //     const userDocRef = doc(this.firestore, `users/${userCredential.user.uid}`);
  //     const userDocSnap = await getDoc(userDocRef);
      
  //     if (userDocSnap.exists()) {
  //       const userData = userDocSnap.data() as User;
        
  //       this.currentUser = new User(
  //         '',
  //         userData.email,
  //         '', // Password is not retrieved from Firestore for security reasons
  //         userData.firstName,
  //         userData.lastName,
  //         userData.Date,
  //         userData.isAdmin,
  //         userData.favouriteFlats
  //       );
  //     } else {
  //       console.error('User document does not exist in Firestore.');
  //       return false;
  //     }

  //     return true;
  //   } catch (error) {
  //     console.error('Login failed:', error);
  //     return false;
  //   }
  // }

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

// import { Injectable } from '@angular/core';
// import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private loggedIn: boolean = false;

//   constructor(private auth: Auth) {}

//   async login(email: string, password: string): Promise<boolean> {
//     try {
//       await signInWithEmailAndPassword(this.auth, email, password);
//       this.loggedIn = true;
//       return true;
//     } catch (error) {
//       console.error('Login failed', error);
//       return false;
//     }
//   }

//   isLoggedIn(): boolean {
//     return this.loggedIn;
//   }
  
//   logout() {
//     this.loggedIn = false;
//     this.auth.signOut();
//   }

  
// }