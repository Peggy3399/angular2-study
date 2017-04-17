import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
    selector: 'todo-detail',
    template:
    `
      <div *ngIf="selectedTodo">
        <h1>我是tododeDetail---{{selectedTodo.name}}</h1>
        <button (click)="goBack()">Go back</button>
      </div>
    `,
    styles: [`
        h1{
            color: blue
        }
    `]
})

export class TodoDetailComponent implements OnInit {
    selectedTodo: Todo;

    constructor(private route : ActivatedRoute, private todoService : TodoService, private location: Location) {}

    ngOnInit() {
        // this.route.params.forEach((params : Params) => {
            // this.route.params
            //   .switchMap((params: Params) => this.todoService.getTodoById(+params['id']))
            //   .subscribe(todo => this.selectedTodo = todo);
        // });

        // this.route.params.forEach((params: Params) => {
        //     let todoId = +params['id']; // 使用+将字符串类型的参数转换成数字
        //     this.todoService.getTodoById(todoId).then(todo => this.selectedTodo = todo);
        // });

        let todoId = +this.route.snapshot.params['id'];
        console.log(todoId, this.route.snapshot)
        this.todoService.getTodoById(todoId).then(todo => this.selectedTodo = todo);
    }

    goBack() {
      this.location.back();
    }
}
