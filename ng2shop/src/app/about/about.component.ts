import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  template: "<h2>{{title}}</h2>",
})
export class AboutComponent {
  title = "About";
}
