import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';

// 属性型指令
@Directive({
    selector: '[prefixHightlight]',
    host: {
        '(click)': 'onclick()',
        '(mouseleave)': 'onMouseLeave()',
        '(mouseenter)': 'onMouseEnter()'
    }
})
export class HighlightDirective {
    private _domElem: ElementRef;
    private _render: Renderer;

    private _defaultColor: any = 'red';

    private _styles: any = {
        backgroundColor: '#fff',
        'font-size': '30px'
    };

    constructor(elem: ElementRef, render: Renderer) {
        this._domElem = elem.nativeElement
        this._render = render;
        //render.setElementStyle(elem.nativeElement, 'backgroundColor', 'red');
    }

    @Input('prefixHightlight') highlightColor: string;

    // @HostListener('mouseenter')
    onMouseEnter() {
      // this._render.setElementStyle(this._domElem, 'backgroundColor', 'red');
        this._render.setElementStyle(this._domElem, 'backgroundColor', this._defaultColor);
    }

    // @HostListener('mouseleave')
    onMouseLeave() {
        this._render.setElementStyle(this._domElem, 'backgroundColor', null);
    }

    // @HostListener('click')
    onclick(){
        this._render.setElementStyle(this._domElem, 'backgroundColor', this.highlightColor);
        this._render.setElementClass(this._domElem, 'blue', true);
        // console.log(this._render)
    }

    // @Input('prefixHightlight') set highlightColor(colorName:string) {
    //     this.setFontColor(colorName);
    // };

    // setFontColor(color:string) {
    //     console.log(this._domElem);
    //     this._domElem.style.color = color;
    // }
}

