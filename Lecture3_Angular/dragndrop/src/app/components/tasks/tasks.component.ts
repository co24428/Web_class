import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Task } from '../task/task';
import { TaskComponent } from '../task/task.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, MaterialModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {}
  
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

  showMessage = false;
  submitted = false;

  addTaskForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ])
  })
  get title() { return this.addTaskForm.get('title')!;}
  get desctiption() { return this.addTaskForm.get('description')!;}
  onSubmit(): void {
    this.submitted = false;
    const task: Task = {
      title: String(this.addTaskForm.value.title),
      description: String(this.addTaskForm.value.description),
    };
    this.todo.push(task);
    if (this.addTaskForm.invalid) return;
  }

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
