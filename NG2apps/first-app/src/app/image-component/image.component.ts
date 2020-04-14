import { Component, Input } from "@angular/core";


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles: [
    `
      .thumbnail{
          width: 100px;
          height: 100px;
        }
    `
  ]
})



export class ImageComponent {
  @Input() imageUrl;
}
