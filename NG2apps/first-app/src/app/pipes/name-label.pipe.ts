import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'nameLabel'
})

export class NameLabel implements PipeTransform{

  transform(value: String, prepend: String) :String {
    return prepend + " " + value
  }

}
