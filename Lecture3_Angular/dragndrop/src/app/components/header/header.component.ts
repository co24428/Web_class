import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  @Output() public sideNavToggle = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}
  onToggleSidenav() {
    // Open and close side nav bar
    this.sideNavToggle.emit();
  }
}
