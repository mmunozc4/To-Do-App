import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Task{
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
}

export interface TaskCreate {
  title: string;
  description?: string;
}


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://127.0.0.1:8000/tasks';
  constructor(private http: HttpClient) { }

  createTask(task: TaskCreate): Observable<Task> {
    console.log("ENTRO");
    return this.http.post<Task>(this.apiUrl, task);
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  statusTask(id: number): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${id}`, {});
  }
}
