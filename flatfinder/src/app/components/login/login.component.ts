import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';
import { RouterModule, Router,RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'

})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) { }

  email = new FormControl<string>('', [Validators.required, Validators.email]);
  password = new FormControl<string>('', [Validators.required]);
  
  async onLogin() {

    const emailValue = this.email.value;
    const passwordValue = this.password.value;

    // Check for null or empty values
    if (!emailValue || !passwordValue) {
      alert('Please fill in both email and password.');
      return;
    }
    const success = await this.authService.login(emailValue, passwordValue);
    if (success) {
      this.router.navigate(['/home']);
    } else {
      alert('Login failed: check your email or password');
    }
  }


}
