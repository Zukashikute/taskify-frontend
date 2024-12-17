import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  selectedStatus: string = '';
  statuses: string[] = ['pending', 'in-progress', 'completed'];
  isEditing: boolean = false;
  selectedTask: Task = {
    _id: '',
    title: '',
    description: '',
    status: 'pending',
    dueDate: '',
  };

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute // To get the task ID from the route
  ) {}

  ngOnInit(): void {
    this.loadTasks();
    this.checkEditingStatus();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.filterTasks(); // Filter tasks after loading
    });
  }

  checkEditingStatus(): void {
    this.route.paramMap.subscribe((params) => {
      const taskId = params.get('id');
      if (taskId) {
        this.isEditing = true;
      } else {
        this.isEditing = false;
      }
    });
  }

  toggleEditing(): void {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      // Reset selectedTask when exiting editing mode
      this.selectedTask = {
        _id: '',
        title: '',
        description: '',
        status: 'pending',
        dueDate: '',
      };
    }
  }

  onTaskSaved(): void {
    this.isEditing = false;
    this.selectedTask = {
      _id: '',
      title: '',
      description: '',
      status: 'pending',
      dueDate: '',
    }; // Reset task
    this.loadTasks(); // Reload tasks to reflect the changes
  }

  filterTasks(): void {
    if (this.selectedStatus === '') {
      this.filteredTasks = this.tasks; // Show all tasks
    } else {
      this.filteredTasks = this.tasks.filter(
        (task) => task.status === this.selectedStatus // Filter by status
      );
    }
  }

  deleteTask(taskId: string) {
    this.taskService.deleteTask(taskId).subscribe(() => {
      this.tasks = this.tasks.filter((task) => task._id !== taskId);
      this.filterTasks(); // Re-filter tasks after deletion
    });
  }
}
