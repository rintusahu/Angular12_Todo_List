import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import {NgConfirmModule} from 'ng-confirm-box';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgbModule,
    NgConfirmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
