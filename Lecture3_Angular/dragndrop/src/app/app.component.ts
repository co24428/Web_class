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
  todo: Task[] = [
    {
      title: 'Buy milk',
      description: 'Go to the store and buy milk'
    },
    {
      title: 'Drawing on canvas',
      description: 'Buy 3 canvas and pens!'
    }
  ];
  inProgress: Task[] = [];
  done: Task[] = [];

  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) return;
    if (!event.container.data || !event.previousContainer.data) return;
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  deleteIt(list: string, task: Task) {
    if(list === 'todo') {
      let index = this.todo.indexOf(task);
      this.todo.splice(index, 1);
    } else if (list === 'inProgress') {
      let index = this.inProgress.indexOf(task);
      this.inProgress.splice(index, 1);
    } else if (list === 'done') {
      let index = this.done.indexOf(task);
      this.done.splice(index, 1);
    }
  }
}
