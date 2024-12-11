import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../../material/material.module';

@Component({
  selector: 'app-side-nav-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './side-nav-list.component.html',
  styleUrl: './side-nav-list.component.css'
})
export class SideNavListComponent implements OnInit{
  @Output() sidenavClose = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
