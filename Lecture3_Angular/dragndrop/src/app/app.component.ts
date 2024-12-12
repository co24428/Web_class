import { Component, Input } from '@angular/core';
import { Task } from './components/task/task';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { RouterOutlet } from '@angular/router';
import { MaterialModule } from './material/material.module';

import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { TaskComponent } from './components/task/task.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { SideNavListComponent } from './components/side-nav-list/side-nav-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, HomeComponent, HeaderComponent, SideNavListComponent, TaskComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
