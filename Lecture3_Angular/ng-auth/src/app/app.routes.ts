import { Routes } from '@angular/router';
import { FirebaseComponent } from './components/firebase/firebase.component';

export const routes: Routes = [
  { path: '', component: FirebaseComponent }, // 기본 경로
  { path: 'firebase', component: FirebaseComponent }, // Firebase 경로
];