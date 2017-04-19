import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoListComponent } from './todolist.component';
import { TodoList2Component } from './todolist2.component';
import { TodoDetailComponent } from './tododetail.component';
import { TodoItemComponent } from './todoitem.component';

// 定义常量 嵌套自路由
const appChildRoutes: Routes = [
  {path: '', redirectTo: "one" },
  {path: "one", component: TodoListComponent},
  {path: "two", component: TodoList2Component}
]

const routes: Routes = [
    {
        path: '',
        redirectTo: '/todo/list',
        pathMatch: 'full'
    }, {
        path: 'todo/list',
        component: TodoListComponent
    }, {
        path: 'todo/detail/:id',
        component: TodoDetailComponent
    }, {
        path: 'todo/item',
        component: TodoItemComponent,
        children: appChildRoutes
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
