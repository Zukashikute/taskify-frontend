import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  @Input() task: Task = {
    _id: '',
    title: '',
    description: '',
    status: 'pending',
    dueDate: '',
  }; // Default empty task
  @Output() taskSaved = new EventEmitter<void>();
  taskId: string = '';
  statuses: string[] = ['pending', 'in-progress', 'completed'];
  errorMessage: string | null = null;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.taskId = params.get('id') || '';
      if (this.taskId) {
        this.loadTask();
      }
    });
  }

  loadTask(): void {
    this.taskService.getTaskById(this.taskId!).subscribe({
      next: (task) => {
        // Format dueDate to YYYY-MM-DD if it exists
        if (task.dueDate) {
          task.dueDate = this.formatDateToInput(task.dueDate);
        }
        this.task = task;
      },
      error: (err) => (this.errorMessage = 'Failed to load task details'),
    });
  }

  formatDateToInput(date: string): string {
    const parsedDate = new Date(date);
    return parsedDate.toISOString().split('T')[0]; // Format to YYYY-MM-DD
  }

  saveTask() {
    this.errorMessage = null; // Clear previous error message
    if (this.taskId) {
      this.taskService.updateTask(this.taskId, this.task).subscribe({
        next: () => {
          console.log('Task updated successfully');
          this.router.navigate(['/tasks']);
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = err.error?.message || 'Failed to update the task';
        },
      });
    } else {
      this.taskService.createTask(this.task).subscribe({
        next: () => {
          console.log('Task created successfully');
          this.taskSaved.emit();
          this.router.navigate(['/tasks']);
        },
        error: (err) => {
          console.error(err);
          this.errorMessage = err.error?.message || 'Failed to create the task';
        },
      });
    }
  }

  cancel() {
    this.router.navigate(['/tasks']);
  }
}
