import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', './footer.component.query.css']
})
export class FooterComponent implements OnInit {
  date: number = Date.now();
  status = false;
  link = '/';
  constructor() { }

  ngOnInit(): void {
  }

  onclick() {
    this.status = !this.status;
  }

}
