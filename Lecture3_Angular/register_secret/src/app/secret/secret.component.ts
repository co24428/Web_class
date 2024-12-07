import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  standalone: true,
  imports: [],
  templateUrl: './secret.component.html',
  styleUrl: './secret.component.css'
})
export class SecretComponent implements OnInit {
  constructor() {}
  secret = "You don't have permissions to see the secret."
  ngOnInit(): void {
    if(localStorage.getItem("username") !== null) {
      this.secret = `The secret is that your password is: ${localStorage.getItem("password")}. Keep it in secret!`
    }
  }
}
