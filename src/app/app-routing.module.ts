import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'tasks/create', component: TaskFormComponent },
  { path: 'tasks/:id/edit', component: TaskFormComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
