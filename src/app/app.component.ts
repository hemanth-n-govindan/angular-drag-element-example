import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor() {}
  title = "angular-drag-element-example";
  dragIconInnerText = "<i>&#8596</i>";
  dragElementClass = "test";
}
