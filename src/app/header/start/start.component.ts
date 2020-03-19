import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css', './start.component.query.css']
})
export class StartComponent implements OnInit {
  animation: string;
  constructor() { }

  ngOnInit(): void {
    this.animation = 'animated slideInLeft';
  }

  shutdown() {
    window.top.close();
  }

}
