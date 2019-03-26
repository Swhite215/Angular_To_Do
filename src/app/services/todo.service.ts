import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import Todo from "../models/Todo";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  constructor(private http: HttpClient) {}

  todosUrl: string = "https://jsonplaceholder.typicode.com/todos";
  query: string = "?_limit=10";

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl + this.query);
  }
}
