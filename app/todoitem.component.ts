import { Component } from '@angular/core';

@Component({
    selector: 'todo-item',
    template:
    `
      <h1>我是tododeItem</h1>
      <div>
        <a routerLink="one" routerLinkActive="active">item one</a>
        <a routerLink="two" routerLinkActive="active">item two</a>
        <router-outlet></router-outlet>
      </div>
    `,
    styles: [`
        h1{
            color: purple
        }
    `]
})

export class TodoItemComponent { }
