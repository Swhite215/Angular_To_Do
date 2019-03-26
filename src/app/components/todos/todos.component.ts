import { Component, OnInit } from "@angular/core";
import Todo from "../../models/Todo";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  //Constructor used for importing services
  constructor() {}

  //Similar to Component Did Mount
  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: "One",
        completed: false
      },
      {
        id: 2,
        title: "Two",
        completed: false
      },
      {
        id: 3,
        title: "Three",
        completed: false
      }
    ];
  }
}
