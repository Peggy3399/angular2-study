import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './dom.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    HighlightDirective,
    UnlessDirective
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
