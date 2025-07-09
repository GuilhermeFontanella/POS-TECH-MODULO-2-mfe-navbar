import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { menuItems } from 'src/utils/constants/menu-items';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrls: ['./lateral-menu.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    NzMenuModule,
    RouterModule
  ]
})
export class LateralMenuComponent {
  public menuItems = menuItems;

  public navigate(path: string): void {
    window.dispatchEvent(new CustomEvent('mfe-navbar-navigate', {detail: path}))
  }
}
