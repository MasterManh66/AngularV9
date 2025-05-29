import { Component, ElementRef, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChildren(ToggleComponent) toggleComps: QueryList<ToggleComponent>;
  @ViewChild('nameInput', {static: true}) nameInput: ElementRef<HTMLInputElement>;

  title = 'angular v9';
  user = {
    name: 'Manh',
    age: 24
  };
  isChecked = true;
  showLast = true;

  ngOnInit() {
    this.toggleComps.changes.subscribe(console.log);
  }

  ngAfterViewInit() {
  }
}
