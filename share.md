## Angular2内置指令

### NgTemplateOutlet

  我们可以建立一个模板,使用这个模板,通过在不同的上下文可重用

```
    <template  #foo let-name="name" let-skills="skills">
        <h4>{{name}}</h4>
        <ul>
          <li *ngFor="let s of skills">{{s}}</li>
        </ul>
    </template>
    <div [ngTemplateOutlet]="foo" [ngOutletContext]="msg1"></div>
    <h1 style="background: yellow;">{{text}}</h1>
    <div [ngTemplateOutlet]="foo" [ngOutletContext]="msg2"></div>
```
### NgStyle

  NgStyle 指令，可以通过angular表达式为DOM元素设置一个CSS属性。

  NgStyle真正厉害之处是可以使用动态值。

```
  <div>
      <input type="text" name="color" #colorinput>
      <input type="text" name="fontSize" #fontinput>
      <button (click)="apply(colorinput.value, fontinput.value)"> apply </button>
  </div>
  <div>
      <span [ngStyle]="{color: colorinput.value, 'background-color': 'blue'}" [style.font-size.px]="fontSize">color :{{ colorinput.value }} font: {{fontinput.value}}</span>
      <p [ngStyle]="style()">hello hello hello</p>
  </div>
```
### NgIf

  ngIf指令是用于当你想要通过某个条件显示或者隐藏一个元素时，条件是由你传递给该指令的表达式结果来确定的。

```
  <div *ngIf="false"></div> <!-- never displayed -->
  <div *ngIf="a > b"></div> <!-- displayed if a is more than b -->
  <div *ngIf="str === 'yes'"></div> <!-- displayed if str holds the string "yes" -->
  <div *ngIf="myFunc()"></div> <!-- displayed if myFunc returns a true value -->
```

  > Angular2 没有提供内置的ng-show，如果你的目标只是改变一个元素的css，你可以考虑使用ngStyle或class指令。只是用[hidden]属性，没有[show]属性。

### NgClass

  NgClass指令，在你的HTML模板通过ngClass属性表示，允许您为一个给定的DOM元素动态地设置和改变CSS类。

  * 使用方式是通过对象字符串，对象用key作为类名称，value应该是一个true/false值，以指示该类是否应该应用。

```
  <div [ngClass]="{bordered: false}">This is never bordered</div>
```
  * 在组件中声明一个数组变量

```
  this.classList = ['blue', 'round'];

  <div class="base" [ngClass]="classList">
    This is {{ classList.indexOf('blue') > -1 ? "" : "NOT" }} blue and {{ classList.indexOf('round') > -1 ? "" : "NOT" }} round
  </div>
```
  * 通过对象数组

```
  <div [ngClass]="{true:'change1',false:'change2'}[className]">This is Angular1</div>

  <div [class.change1]="className">This is Angular2</div>
```
  * 通过key/value

```
  <div [ngClass]="{'change1':select1,'change2':select2,'change3':select3}"></div>

  $scope.select=true;
  $scope.lala=true;

  <div [ngClass]="{'change1':(className == 'select1')}"></div>
```

### ngSwitch

  NgSwitch指令可以应用在任何HTML元素上，它评估元素的ngSwitch属性值，并根据这个值 决定应用哪些template的内容

```
    <ul [ngSwitch]="choice">
        <li *ngSwitchCase="1">First choice</li>
        <li *ngSwitchCase="2">Second choice</li>
        <li *ngSwitchCase="3">Third choice</li>
        <li *ngSwitchCase="4">Fourth choice</li>
        <li *ngSwitchCase="2">Second choice, again</li>
        <li *ngSwitchDefault>Default choice</li>
    </ul>
```
  >可以同时显示多个分支例如,在上面的示例中choice是2时,第二和第五li将渲染。

### NgNonBindable

    当我们想告诉angular不编译或绑定我们的页面的特定部分,我们使用ngNonBindable

    比方说，我们要渲染在我们模板中的纯字符串 {{content}}。通常，该文本将因为我们使用的 {{}} 模板语法绑定到content变量的值。

```
    <span class="bordered">{{ content }}</span>
    <span class="pre" ngNonBindable>
        &lt;-- This is what {{ content }} rendered </span>
    </div>
```
## NgZone
  

  [关于zone](http://www.cnblogs.com/czaiz/p/6530820.html)：简单的可以概述成zone是一个异步事件拦截器，也就是说zone能够hook到异步任务的执行上下文，以此来处理一些操作，比如说，在我们每次启动或者完成一个异步的操作、进行堆栈的跟踪处理、某段功能代码进入或者离开zone，我们可以在这些关键的节点重写我们所需处理的方法。

  实际上，ngZone是基于[zone.js](http://www.cnblogs.com/whitewolf/p/zone-js.html)来实现的，Angular2 fork了zone.js，它是zone派生出来的一个子zone，在Angular环境内注册的异步事件都运行在这个子zone上(因为ngZone拥有整个Angular运行环境的执行上下文)
