import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodosComponent } from "./components/todos/todos.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { HeaderComponent } from './components/layout/header/header.component';

//Entry Point to Angular - Meeting Place for Components
//Declarations - Components
//Imports - Additional Modules
//Providers - Services
//Bootstrap - Root Component Inserted Into Index.html Page
@NgModule({
  declarations: [AppComponent, TodosComponent, TodoItemComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
