import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { merge } from 'rxjs';
import { RouterModule, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
import { Firestore, collection, doc, getDocs, query, updateDoc, where } from '@angular/fire/firestore';


@Component({
  selector: 'app-allusers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './allusers.component.html',
  styleUrl: './allusers.component.css'
})
export class AllusersComponent implements OnInit {
  constructor(private authService: AuthService, private firestore: Firestore) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  users: User[] = [];

  async getAllUsers() {

    const querySnapshot = await this.authService.fetchAllUsers();
    querySnapshot.forEach((doc: { id: any; data: () => any; }) => {
      const tmpUser = new User(
        doc.data()['uid'],
        doc.data()['email'],
        '', // password
        doc.data()['firstName'],
        doc.data()['lastName'],
        doc.data()['birthDate'].toDate(),
        doc.data()['isAdmin'] === 'true' ? true : false,
        doc.data()['favouriteFlats']
      );
      this.users.push(tmpUser);
    });
  }

  async toggleAdmin(user: User): Promise<void> {
    // Toggle the isAdmin value in the user object
    user.isAdmin = !user.isAdmin;
  
    const usersCollectionRef = collection(this.firestore, 'users');
    const q = query(usersCollectionRef, where('uid', '==', user.uid));
    const querySnapshot = await getDocs(q);
    
    // Update Firestore with the new value
    if (!querySnapshot.empty) {
      // Loop through the documents in the querySnapshot
      for (const docSnap of querySnapshot.docs) {
        const userDocRef = doc(this.firestore, `users/${docSnap.id}`);
        
        // Update the document
        await updateDoc(userDocRef, { isAdmin: user.isAdmin ? 'true' : 'false' })
          .then(() => {
            console.log(`Firestore updated: ${user.email} is now ${user.isAdmin ? 'an Admin' : 'not an Admin'}`);
          })
          .catch((error) => {
            console.error('Error updating Firestore:', error);
            // Revert the change locally if Firestore update fails
            user.isAdmin = !user.isAdmin;
          });
      }
    } else {
      console.error(`No document found for user with UID: ${user.uid}`);
    }
  }
}
