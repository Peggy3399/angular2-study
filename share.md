## Angular2内置指令

### ngTemplateOutlet

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
### ngSwitch && *ngSwitchDefault

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

### NgStyle

  NgStyle 指令，可以通过angular表达式为DOM元素设置一个CSS属性。

  ngStyle真正厉害之处是可以使用动态值

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
  >ngIf,ngClass都有类似的用法

### NgNonBindable

    当我们想告诉angular不编译或绑定我们的页面的特定部分,我们使用ngNonBindable

    比方说，我们要渲染在我们模板中的纯字符串 {{content}}。通常，该文本将因为我们使用的 {{}} 模板语法绑定到content变量的值。

```
    <span class="bordered">{{ content }}</span>
    <span class="pre" ngNonBindable>
        &lt;-- This is what {{ content }} rendered </span>
    </div>
```

