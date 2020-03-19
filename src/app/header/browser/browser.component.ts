import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css', './browser.component.query.css', '../header-common.css', '../header-common.query.css']
})
export class BrowserComponent implements OnInit {
  animation: string;
  isLoading = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.animation = 'animated slideInLeft';
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  }

  onclose() {
    this.router.navigate(['/']);
  }


}
