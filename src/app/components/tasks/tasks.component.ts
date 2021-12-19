import { Component, OnInit } from '@angular/core';
import {TASKS} from '../../mock-server-tasks'; //array
import {Task} from '../../Task';  //type

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = TASKS;
  constructor() { }

  ngOnInit(): void {
  }

}
