import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { Task } from './task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent implements OnInit{
  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<Task>();
  constructor() {}
  ngOnInit(): void {}

}

