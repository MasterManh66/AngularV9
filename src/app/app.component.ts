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

  isDanger = true;
  isWarning = true;
  classes ="box red-border yellow-background";
}
