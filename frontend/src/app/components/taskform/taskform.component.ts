import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskService, TaskCreate } from '@app/services/task.service';

@Component({
  selector: 'app-taskform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './taskform.component.html',
  styleUrl: './taskform.component.css'
})
export class TaskformComponent {
  taskForm: FormGroup;
  @Output() taskCreated = new EventEmitter<void>();

  constructor(private formB:FormBuilder , private taskService: TaskService){
    this.taskForm = this.formB.group({
      title: ['', Validators.required],
      description: ['']
    })
  }

  onSubmit(): void{
    if (this.taskForm.valid) {
      const newTask: TaskCreate = this.taskForm.value
      this.taskService.createTask(newTask).subscribe(()=>{
        this.taskForm.reset();
        this.taskCreated.emit();
      })
    }
  }
}
