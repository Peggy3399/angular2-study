import {Component} from '@angular/core';

@Component({moduleId: module.id, selector: 'my-app', templateUrl: 'app.component.html', styleUrls: ['app.component.css']})

export class AppComponent {
    msg1 : any;
    msg2 : any;
    text = '分割线';
    children: any;

    constructor() {
        this.msg1 = {
            name: "Zhentian",
            skills: ["JS", "Angular"]
        };
        this.msg2 = {
            name: "Wan",
            skills: ["JSX", "React", "hhhhhhh"]
        };
        this.children = [{
          name: '小哇',
          age: '21'
        }, {
          name: '小嗨',
          age: '21'
        }]
    }
}
