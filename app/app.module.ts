import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import{ RouterModule }from'@angular/router';

import { AppRoutingModule } from './app.routes';

import { AppComponent }  from './app.component';
import { TodoListComponent } from './todolist.component';
import { TodoList2Component } from './todolist2.component';
import { TodoDetailComponent } from './tododetail.component';
import { TodoItemComponent } from './todoitem.component';

import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './dom.directive';

import { TodoService } from './todo.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HighlightDirective,
    UnlessDirective,
    TodoListComponent,
    TodoDetailComponent,
    TodoItemComponent,
    TodoList2Component
  ],
  providers: [ TodoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
