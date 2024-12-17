import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskItemComponent } from './tasks/task-item/task-item.component';
import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskFormComponent,
    DashboardComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
