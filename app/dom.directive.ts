import { Directive, Input } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';

// 结构型指令
@Directive({
  selector: '[myUnless]'
})
export class UnlessDirective {
    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef){}

    @Input() set myUnless(condition: boolean) {
        // console.log(this.viewContainerRef);
        if(!condition) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainerRef.clear();
        }
    }
}
