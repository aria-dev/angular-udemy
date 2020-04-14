import { Component, Input } from "@angular/core";

@Component({
  selector: 'similar-searches',
  templateUrl: 'similarsearches.component.html'
})

export class SimilarSearchesComponent{
  @Input() searchitems;
}
