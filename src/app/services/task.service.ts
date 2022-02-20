import { Injectable } from '@angular/core';
// import {TASKS} from '../mock-server-tasks';
import {Task} from '../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    // const tasks = of(TASKS) // of(TASKS) -> turns TASKS into an observable
    // return tasks;
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task>{
    return this.http.delete<Task>(`${this.apiUrl}/${task.id}`)
  }
}
