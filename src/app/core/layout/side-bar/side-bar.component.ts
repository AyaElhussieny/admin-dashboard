import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, TieredMenuModule, ButtonModule, MenuModule, AvatarModule, RippleModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        separator: true,
      },

      {
        label: 'Dashboard',
        routerLink: '/',
        icon: 'pi pi-home',
      },

      {
        label: 'Orders',
        routerLink: '/Orders',
        icon: 'pi pi-shopping-cart',
      },
      {
        label: 'Users',
        icon: 'pi pi-user',
      },

      {
        label: 'Items',
        icon: 'pi pi-building-columns',
      },

      {
        label: 'Tranactions',
        icon: 'pi pi-file-arrow-up',
      },
      {
        label: 'Reports',
        icon: 'pi pi-file-check',
      },
      {
        separator: true,
      },
      {
        label: 'Messages',
        icon: 'pi pi-envelope',
      },
      {
        label: 'Support',
        icon: 'pi pi-lightbulb',
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
      },
    ];
  }
}
