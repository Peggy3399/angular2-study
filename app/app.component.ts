import {Component, OnInit, AfterViewInit, Input, HostListener, NgZone} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
})

export class AppComponent implements OnInit, AfterViewInit {
    msg1 : any;
    msg2 : any;
    text = '分割线';
    children : any;
    favoriteHero : true;
    choice : any;
    color : any;
    fontSize : any;
    content : string;
    name : string = 'thoughtram';
    options : any;
    str : string = "yes";
    a: number = 0;
    b: number = 1;
    classList: any[] = ['blue', 'round'];
    className: boolean = true;
    select2: boolean = true;
    // highlightColor: any = 'yellow';

    constructor(private zone: NgZone) {}


    ngOnInit() {
        console.log(this.zone)
        console.log(`AppComponent has inited : ${ Date.now() }`);
        this.msg1 = {
            name: "Zhentian",
            skills: ["JS", "Angular", "jjjjjj"]
        };
        this.msg2 = {
            name: "Wan",
            skills: ["JSX", "React", "hhhhhhh"]
        };
        this.choice = 0;
        this.content = '1234567890'

    }

    ngAfterViewInit() {}

    nextChoice() {
        this.choice++;
        if (this.choice === 7) {
            this.choice = 0;
        }
    }

    apply(color : any, font : any) {
        this.color = color;
        this.fontSize = font;
    }

    style() {
        let styles = {
            color: 'red',
            fontSize: '12px'
        }
        return styles;
    }

    myFunc(){
        return true;
    }
}
