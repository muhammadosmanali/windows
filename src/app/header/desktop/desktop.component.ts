import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css']
})
export class DesktopComponent implements OnInit {
  status: boolean;
  menuStatus: boolean;
  @ViewChild('menu') menu: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onclick() {
    this.status = true;
  }

  @HostListener('window:resize', ['$event'])
  onRightClick($event) {
    if (window.innerWidth > 480) {
      this.menuStatus = true;
    } else {
      this.menuStatus = false;
    }
    return false;
  }

  refresh() {
    // @ts-ignore
    window.open(window.location, '_self');
  }

  onLeftClick() {
    this.menuStatus = false;
  }

}
