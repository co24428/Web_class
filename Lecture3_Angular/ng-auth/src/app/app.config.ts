import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule

import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyA5RcHDEPk8GtXEGARBK5QcWSJzL2AC5f4",
  authDomain: "test-7b99b.firebaseapp.com",
  projectId: "test-7b99b",
  storageBucket: "test-7b99b.firebasestorage.app",
  messagingSenderId: "1012144607473",
  appId: "1:1012144607473:web:6fd44c4179112292d55950",
  measurementId: "G-Q31RR8LHYH"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    FormsModule,
    CommonModule,
    // importProvidersFrom(FormsModule), // Ensure FormsModule is here
    // importProvidersFrom(CommonModule), // Add CommonModule here
  ],
};