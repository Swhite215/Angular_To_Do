import { Component, OnInit } from "@angular/core";
import Todo from "../../models/Todo";
import { TodoService } from "../../services/todo.service";
@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  //Constructor used for importing services
  constructor(private todoService: TodoService) {}

  //Similar to Component Did Mount
  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => (this.todos = todos));
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }
}
