import { Component, Input } from "@angular/core";

@Component({
  selector: 'recent-item',
  template: '<p><a href="#">{{item_name}}</a></p>'
})

export class SearchItemComponent{
  @Input() item_name;
}
