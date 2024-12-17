import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input() tasks: Task[] = []; // Accept tasks from the parent component
  @Output() delete = new EventEmitter<string>();

  constructor() {}
}
