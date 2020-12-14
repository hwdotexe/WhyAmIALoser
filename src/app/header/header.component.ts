import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showNav: boolean;

  constructor() {
    this.showNav = window.innerWidth >= 900;
  }

  ngOnInit() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.showNav = window.innerWidth >= 900;
  }

  mobileToggleNav() {
    this.showNav = !this.showNav;
  }

  mobileClickHideNav() {
    if(window.innerWidth < 900){
      this.showNav = false;
    }
  }
}
