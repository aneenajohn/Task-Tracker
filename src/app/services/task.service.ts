import { Injectable } from '@angular/core';
import {TASKS} from '../mock-server-tasks';
import {Task} from '../Task';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS) // of(TASKS) -> turns TASKS into an observable
    return tasks;
  }
}
