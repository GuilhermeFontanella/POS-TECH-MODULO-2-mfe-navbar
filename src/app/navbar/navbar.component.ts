import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { checkScreenSize, ScreenType } from 'src/utils/check-screen-size';
import { menuItems } from 'src/utils/constants/menu-items';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NzMenuModule,
    NzToolTipModule,
    NzIconModule,
    NzButtonModule,
    RouterModule,
    HttpClientModule,
  ]
})
export class NavbarComponent implements OnInit {
  @HostListener('window:resize', ['$event']) onWindowResize() {
    this.screenType = checkScreenSize(window.innerWidth);
  }
  @Input() screenType: ScreenType = 'desktop';
  
  isCollapsed: boolean = false;
  windowWidth: number = 0;
  public menuItems = menuItems;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.screenType = checkScreenSize(window.innerWidth);
  }

  public toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  public navigate(path: string): void {
    window.dispatchEvent(
      new CustomEvent(
        'mfe-navbar-navigate', 
        { detail: path }
      )
    )
  }
}
