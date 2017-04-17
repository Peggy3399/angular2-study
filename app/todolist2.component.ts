import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TodoService } from './todo.service';

import { Todo } from './todo';

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    template:
    `
      <h1>我是todoList</h1>
      <ul class="todo-list">
          <li *ngFor="let todo of todoList" (click)="selected(todo)" [class.selected]="todo  === selectedTodo">
            <span class="badge">{{todo.id}}</span>{{todo.name}}
          </li>
      </ul>
      <div *ngIf="selectedTodo">
          <h2>
            {{selectedTodo.name | uppercase}} is selected!
          </h2>
          <button (click)="gotoDetail()">View Details</button>
      </div>
    `,
    styleUrls: ['todolist.component.css']
})

export class TodoListComponent implements OnInit {
    todoList: Todo[];
    selectedTodo: Todo;
    constructor(private router: Router, private todoService: TodoService){}

    ngOnInit(){
        this.todoService.getTodoList().then(todoList => this.todoList = todoList);
    }

    selected(selectedTodo: Todo) {
        this.selectedTodo = selectedTodo;
    }

    gotoDetail() {
        // this.router.navigate(['/todo/detail',this.selectedTodo.id]);
        this.router.navigate( ['/todo/detail', this.selectedTodo.id], { queryParams: { id: this.selectedTodo.id, type:'important'}});
    }
}
