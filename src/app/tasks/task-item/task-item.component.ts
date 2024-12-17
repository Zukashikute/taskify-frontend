import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() delete = new EventEmitter<string>();
  showModal: boolean = false;

  onDelete() {
    this.showModal = true; // Show the confirmation modal
  }

  deleteTask(confirmed: boolean) {
    this.showModal = false;
    if (confirmed) {
      this.delete.emit(this.task._id);
    }
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'status-completed';
      case 'pending':
        return 'status-pending';
      case 'in-progress':
        return 'status-in-progress';
      default:
        return '';
    }
  }

  isDatePast(dueDate: string | Date): boolean {
    const today = new Date();
    const taskDate = new Date(dueDate);
    return taskDate < today;
  }
}
