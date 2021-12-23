import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  title: string;
  todoItem: string;
  todoItems: Array<string> = [];
  // constructor is for dependancies injection
  constructor() {}

  ngOnInit() {
    this.title = 'Personal To Do List';
  }
  updateList() {
    this.todoItems.push(this.todoItem);
    this, (this.todoItem = '');
  }
}
