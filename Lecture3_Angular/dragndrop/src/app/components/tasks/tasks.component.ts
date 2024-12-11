import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Task } from '../task/task';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit{
  constructor() {}
  ngOnInit(): void {}
  @Input() todo: Task[] = [];
  @Input() inProgress: Task[] = [];
  @Input() done: Task[] = [];
  // @Output() drop = new EventEmitter<Task>();

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
  getTitle() { return this.addTaskForm.get('title')!;}
  getDesctiption() { return this.addTaskForm.get('description')!;}
  onSubmit(): void {
    this.submitted = false;
    if (this.addTaskForm.invalid) return;
  }
}
