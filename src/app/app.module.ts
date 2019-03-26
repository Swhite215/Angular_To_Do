import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodosComponent } from "./components/todos/todos.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { HeaderComponent } from "./components/layout/header/header.component";
import { AddTodoComponent } from "./components/add-todo/add-todo.component";

//Entry Point to Angular - Meeting Place for Components
//Declarations - Components
//Imports - Additional Modules
//Providers - Services
//Bootstrap - Root Component Inserted Into Index.html Page
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
