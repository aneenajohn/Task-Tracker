import { Component, OnInit } from '@angular/core';
// import {TASKS} from '../../mock-server-tasks'; //array
import {Task} from '../../Task';  //type
import {TaskService} from '../../services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  // Inorder to use the service, add it as a provider inside constructor
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    // this.tasks = this.taskService.getTasks()
    // Subscribe to the observable to use it
    // Kinda promise .then
    this.taskService.getTasks().subscribe((tasks) => this.tasks =tasks)
  }

}
