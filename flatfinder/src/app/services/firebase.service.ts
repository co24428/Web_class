import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, addDoc } from '@angular/fire/firestore';

import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private firestore: Firestore, private auth: Auth) {}

  // Firestore 데이터 가져오기
  async getCollectionData(collectionName: string) {
    const colRef = collection(this.firestore, collectionName);
    const snapshot = await getDocs(colRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  // Firestore에 데이터 추가
  async addDataToCollection(collectionName: string, data: any) {
    const colRef = collection(this.firestore, collectionName);
    await addDoc(colRef, data);
  }

  // Firebase 인증 - 로그인
  async login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  // Firebase 인증 - 회원가입
  async signup(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
}