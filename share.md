## Angular2内置指令

  Angular2 指令是构成Angular2应用程序的重要组成部分，指令主要用来对模板的标签或者元素附加一些新的特性或者功能，改变一个 DOM 元素的外观或行为，主要存在两种类型的指令：

  * 结构型指令：会通过添加 / 删除 DOM 元素来更改 DOM 树布局
  * 属性型指令：指令改变一个元素的外观或行为。

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

## 自定义指令

  ### 属性型指令 

  * [Directive](http://blog.csdn.net/shenlei19911210/article/details/53218074) 提供@Directive装饰器功能。
  * ElementRef：是一个服务，注入到指令构造函数中，这样代码可以访问 DOM 元素。
  * Input：将数据从绑定表达式传达到指令中。
  * Renderer：写在构造函数中，让代码可以改变 DOM 元素的属性等（setElementAttribute，setElementStyle，setElementClass等）。
  * host：添加监听事件。
  

  @Directive装饰器需要一个 CSS 选择器(属性名称加方括号-[attr])，以便从模板中识别出关联到这个指令的 HTML。 
  指令的选择器是[myHighlight]，Angular将会在模板中找到所有带myHighlight属性的元素。

  > 一定要记住在 @NgModule 的 declarations 数组中显示的声明我们定义的指令。

```
  import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

  @Directive({
      selector: '[prefixHightlight]',
      host: {
          '(click)': 'onclick()',
          '(mouseleave)': 'onMouseLeave()',
          '(mouseenter)': 'onMouseEnter()'
      }
  })
```

  使用数据绑定向指令传递值,在定义这个属性的时候，我们调用了@Input()装饰器。

```
  @Input('prefixHightlight') highlightColor: string;
```

  添加监听事件另一种就是通过 @HostListener，直接操纵 DOM 元素的方式给宿主 DOM 元素附加一个事件监听器。
  
```
  @HostListener('mouseenter')
  onMouseEnter() {}
```
  ### 结构型指令

  [结构型指令](http://blog.csdn.net/u010130282/article/details/53613297)需要在构造方法注入TemplateRef和ViewContainerRef这两个服务，TemplateRef用于访问组件模板，ViewContainerRef是渲染器，用于往DOM插入或移除模板等。

  > 注意属性型和结构型子在dom元素中的写法

## NgZone

  Angular应用程序通过组件实例和模板之间进行数据交互，也就是将组件的数据和页面DOM元素关连起来，当数据有变化后，NG2能够监测到这些变化并更新视图，反之亦然，它的数据流向是单项的，通过属性绑定和事件绑定来实现数据的流入和流出，数据从属性绑定流入组件，从事件流出组件，数据的双向绑定就是通过这样来实现的。

  ### 进行变化监测的情形

  angular需要去更新视图的情形： 

  * event：在view中绑定事件来监听用户的操作，如果数据有变更则更新视图；
  * xmlHTTPRequest/webSocket：例如从远端服务拉取对应的数据，这是一个异步的过程；
  * timeout：例如：setTimeout, setInterval, requestAnimationFrame都是在某个延时后触发。

  (requestAnimationFrame)[http://www.zhangxinxu.com/wordpress/tag/requestanimationframe/]

  这些都是异步的处理，即需要使用异步回调函数，结论就是，不管任何时候的一个异步操作，我们应用程序状态可能已经被改变，这就需要告诉Angular去更新视图。

  [关于zone](http://www.cnblogs.com/czaiz/p/6530820.html)：简单的可以概述成zone是一个异步事件拦截器，也就是说zone能够hook到异步任务的执行上下文，以此来处理一些操作，比如说，在我们每次启动或者完成一个异步的操作、进行堆栈的跟踪处理、某段功能代码进入或者离开zone，我们可以在这些关键的节点重写我们所需处理的方法。

  实际上，ngZone是基于[zone.js](http://www.cnblogs.com/whitewolf/p/zone-js.html)来实现的，Angular2 fork了zone.js，它是zone派生出来的一个子zone，在Angular环境内注册的异步事件都运行在这个子zone上(因为ngZone拥有整个Angular运行环境的执行上下文)。

