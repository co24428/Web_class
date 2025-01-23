import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      alert('foooo')
      return true; // User is logged in
    } else {``
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false;
    }
  }
}