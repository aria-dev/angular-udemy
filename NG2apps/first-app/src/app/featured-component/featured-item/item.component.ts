import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-feature-item',
  template: '<p>{{item_name}}</p>'
})

export class FeaturedItem{
  @Input() item_name;
}
