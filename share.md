

- ngClass
```
<some-element [ngClass]="'first second'">...</some-element>
<some-element [ngClass]="['first', 'second']">...</some-element>
<some-element [ngClass]="{'first': true, 'second': true, 'third': false}">...</some-element>
<some-element [ngClass]="stringExp|arrayExp|objExp">...</some-element>
<some-element [ngClass]="{'class1 class2 class3' : true}">...</some-element>
```
- ngTemplateOutlet

一个模板在上下文重复利用

```
<template #foo let-name="name" let-skills="skills">
    <h4>{{name}}</h4>
    <ul>
      <li *ngFor="let s of skills">{{s}}</li>
    </ul>
</template>
<div [ngTemplateOutlet]="foo" [ngOutletContext]="msg1"></div>
```
