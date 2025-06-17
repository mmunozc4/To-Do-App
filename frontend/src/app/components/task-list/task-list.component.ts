import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '@app/services/task.service';
import { TaskformComponent } from '@app/components/taskform/taskform.component';
import { TaskItemComponent } from '@app/components/task-item/task-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskformComponent, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private  taskService: TaskService){}

  ngOnInit(): void {
      this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

  statusTask(id: number): void {
    this.taskService.statusTask(id).subscribe(() => {
      this.loadTasks();
    });
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }
}
