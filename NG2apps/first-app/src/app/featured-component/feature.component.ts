import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html'
})

export class Feature{
  feature_title = "Recent Searches";
  @Input() featureditems;
}
