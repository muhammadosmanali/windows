import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css', './setting.component.query.css', '../header-common.css', '../header-common.query.css']
})
export class SettingComponent implements OnInit {
  screenWidth: any;
  animation: string;
  widthStatus: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.animation = 'animated slideInLeft';
    this.getScreenSize();

  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 480) {
      this.widthStatus = true;
    } else {
      this.widthStatus = false;
    }
  }

  onclose() {
    this.router.navigate(['/']);
  }
}
