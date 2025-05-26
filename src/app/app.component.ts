import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular v9';
  user = {
    name: 'Manh',
    age: 24
  };
  handler(event){
    console.log('Hello', event);
  }
}
