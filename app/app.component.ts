import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {
    msg1 : any;
    msg2 : any;
    text = '分割线';
    children: any;
    favoriteHero: true;
    choice : any;
    color: any;
    fontSize: any;
    content: string;

    constructor() {}

    ngOnInit() {
        this.msg1 = {
            name: "Zhentian",
            skills: ["JS", "Angular"]
        };
        this.msg2 = {
            name: "Wan",
            skills: ["JSX", "React", "hhhhhhh"]
        };
        this.choice = 0;
        this.content = '1234567890'
    }

    nextChoice() {
      this.choice ++;
      if(this.choice === 7){
            this.choice = 0;
      }
    }

    apply(color: any, font: any) {
        this.color = color;
        this.fontSize = font;
    }

    style(){
        let styles = {
          color: 'red',
          fontSize: '12px'
        }
        return styles;
    }
}
