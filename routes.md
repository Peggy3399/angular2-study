## Angular2路由
  大多数带路由的应用都要在 index.html 的 <head> 标签下先添加一个 <base> 元素，来告诉路由器该如何合成导航用的 URL 。

  Angular2包含了一个路由框架，我们只需要定义一个个的路径、和它对应的组件，然后在页面跳转时也使用Angular2的方式，我们就能够很方便的实现路由控制。

  Angular2的路由主要包括下面4个部分：

  * 路由定义：通俗来说定义的就是一个URL路径，打开的是哪个页面，由哪个控制器来控制数据交互和用户交互。在Angular2中，这个控制器就是组件(Component)，页面就是在组件定义中定义的这个组件对应的模板页面。
  * 路由器：也就是分发器。它是由Angular2的框架实现。当我们点击一个链接时，就是由它来确定要打开哪一个组件，怎么封装和传递参数等。
  * 导航：也就是从一个页面打开另一个页面。一般有两种方式，一种是通过页面上的一个链接link，另一种是在js里面使用代码导航。 
  * 参数：当我们在页面之间跳转时，通常都需要传递参数。除了常用的通过url参数来传递以外，在REST风格的路径设计中，我们经常需要使用某一个id来作为url的一部分，也就是说把参数放在url里面

### 路由定义

  我们需要定义我们的路由，也就是路径-组件的对应关系。通常我们会创建一个单独的文件 app.routes.ts，基本的内容如下：

```
  import{ Routes }from'@angular/router';
  
  export const routes: Routes = [ 
    { path: '', redirectTo: '/todost', pathMatch: 'full' }, 
    { path: 'todost', component: TodoListComponent }, 
    { path: 'todo/detail/:id', component: TodoDetailComponent }
  ];
```
  需要在app.module.ts中引入路由模块：

```
  import { RouterModule } from '@angular/router';

  imports: [
    RouterModule.forRoot(routes)
  ]
```
  > 如果我们要定义子模块和子模块路由，就需要使用 AppRoutingModule的方式。在你的开发中，也建议使用路由模块的定义方式。

```
  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  
  const routes: Routes = [{
      path: '',
      redirectTo: '/todo/list',
      pathMatch: 'full'
  }, {
      path: 'todo/list',
      component: TodoListComponent
  }, {
      path: 'todo/detail/:id',
      component: TodoDetailComponent
  }];
  @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
  })
```

   Routes其实就是一个路由列表类型 Route[],而 Route是Angular路由框架定义的一个接口。最基本的路由包括2个属性: path和 component,分别是这个路由对应的URL路径，和这个路径对应的组件。

   上面使用 redirectTo: '/todo/list'，重定向到任务列表。当我们使用 redirectTo重定向时，需要 pathMatch来指定匹配方式，也就是如何匹配上面的 ''。我们可以完全匹配 full,也可以匹配前缀 prefix。

### 路由器

#### 设置载入点

  载入点，就是来告诉Angular我们的这个路由对应组件的页面，要载入到页面上哪一个地方，这个就是 RouterOutlet。

```
  <router-outlet></router-outlet>
```
### 导航 

#### 使用链接导航

```
  <a routerLink="/todo/list" routerLinkActive="active">这是一个链接</a>
```
  outerLink="/todo/list" 就是链接的定义方式，后面的 routerLinkActive="active" 表示如果当前的路由处于被激活的状态时，在这个链接的a元素上，就添加一个 active的css类。

#### 代码中导航

  有时候，我们需要在代码中根据具体情况跳转到不同的页面，我们可以通过Angular2提供的路由器 Router来实现。

  如果我们要在某一个组件中实现跳转，我们需要在这个组件的构造方法中注入 Router，然后在需要的时候调用它的 [navigate](http://blog.csdn.net/erciyuan_nuonuo/article/details/54604311)(newUrl)方法。todoitem.component.ts:

```
  import { Router } from '@angular/router';

  export class TodoItemComponent {
      constructor(private router: Router) { }

      gotoDetail(todo: any) {
          this.router.navigate(['/todo/detail', todo.id]);
      }
  }
```

### 传递参数

  如果只是在使用路由的时候传递参数的话，有2种方式：

  * 路径方式：参数作为路径的一部分，例如 /todo/detail/12，其中的’12’就是参数，代表任务Id。 
  
```
  <a [routerLink]="['/todo/detail', 12]" routerLinkActive="active">
```

  在这里，我们使用 [routerLink]的方式进行数据的绑定，绑定的值，就是 ['/todo/detail', item.id]，他是一个表达式，Angular会把这个列表中的2个数据解析后拼接在一起，生成’/todo/detail/12’的链接。如果我们的连接格式是’/todo/12/detail’，那就是这样：

```
  <a [routerLink]="['/todo', item.id, 'detail']" routerLinkActive="active">
```
  代码中参数导航：
```
  onSelect(item: Item) {
    this.router.navigate( ['/todo/detail', item.id] );
  }
```

  * 参数方式：这种方式是把参数放在URL的参数里，例如 /todo/detail/12?id=12&type=important。

```
  <a [routerLink]="['/todo/detail']" [queryParams]="{id: item.id, type: 'important'}"></a>
```

  代码中参数导航：

```
  onSelect(item: Item) {
    this.router.navigate( ['/todo/detail', this.selectedTodo.id], { queryParams: { id: this.selectedTodo.id, type:'important'}});
  }
```
## 路由嵌套

  在需要加载的组件下写children，写法与路由的写法一致

```
  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';

  const appChildRoutes: Routes = [
      {path: '', redirectTo: "one" },
      {path: "one", component: TodoListComponent},
      {path: "two", component: TodoList2Component}
  ]

  const routes: Routes = [{
      path: '',
      redirectTo: '/todo/list',
      pathMatch: 'full'
  }, {
      path: 'todo/list',
      component: TodoListComponent
  }, {
      path: 'todo/detail/:id',
      component: TodoDetailComponent,
      children: appChildRoutes
  }];
  @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
  })
```
