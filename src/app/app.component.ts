import { Component } from "@angular/core";

//Component File
//@Component Decorator - Meta-Data: Selector, templateUrl, styleUrls
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

//Component = Class w/Properties
export class AppComponent {
  title: string = "Spencer's To-Do Application";

  constructor() {
    this.changeTitle("Hello World!");
  }

  changeTitle(name: string) {
    this.title = name;
  }
}
