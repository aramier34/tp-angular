import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { TodoComponent } from './components/todo/todo.component';
import { TestDirective } from './shared/directives/test.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }