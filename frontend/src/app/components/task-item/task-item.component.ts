import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '@app/services/task.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() taskChanged = new EventEmitter<void>();
  @Output() taskDeleted = new EventEmitter<void>();
}
