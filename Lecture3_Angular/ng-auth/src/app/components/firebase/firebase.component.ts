import { Component } from '@angular/core'; // Angular Component 데코레이터
import { FirebaseService } from '../../services/firebase.service'; // Firebase 서비스
import { FormsModule } from '@angular/forms'; // FormsModule for ngModel
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-firebase',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './firebase.component.html',
  styleUrl: './firebase.component.css'
})

export class FirebaseComponent {
  data: any[] = [];
  email: string = '';
  password: string = '';

  constructor(private firebaseService: FirebaseService) {}

  // Firestore 데이터 가져오기
  async loadData() {
    this.data = await this.firebaseService.getCollectionData('your-collection-name');
  }

  // Firestore에 데이터 추가
  async addData() {
    await this.firebaseService.addDataToCollection('your-collection-name', { name: 'New Item' });
    this.loadData(); // 데이터 다시 로드
  }

  // Firebase 로그인
  async login() {
    try {
      await this.firebaseService.login(this.email, this.password);
      alert('Login successful!');
    } catch (error) {
      console.error(error);
    }
  }

  // Firebase 회원가입
  async signup() {
    try {
      await this.firebaseService.signup(this.email, this.password);
      alert('Signup successful!');
    } catch (error) {
      console.error(error);
    }
  }
}
