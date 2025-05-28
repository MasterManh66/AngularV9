import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css']
})
export class HiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  progress = 50;
  backgroundColor = 'blue';
  progressColor = 'green';

}
