import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Your Dating Profile';
  description = 'this is a miracle!';
  items = [
    'https://cdn.pixabay.com/photo/2020/02/26/23/28/rabbits-4883006_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/06/24/15/48/pattern-1477380_960_720.png',
    'https://cdn.pixabay.com/photo/2017/03/31/15/34/cactus-2191647_960_720.jpg'
  ]
  searches = [
    'how to frame a person',
    'what is obama drinking right now',
    'is sarah williams a real person'
  ]
  similar = [
    'Near me',
    'Near Manchester',
    'My Roommate'
  ]
}
