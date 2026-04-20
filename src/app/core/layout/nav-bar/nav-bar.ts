import { Component, inject, signal, ViewChild } from '@angular/core';
import { InputSearchComponent } from '../../../shared/UI/input-search/input-search.component';
import { MainIcon } from '../../../shared/UI/main-icon/main-icon';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem, MessageService } from 'primeng/api';
import { StorageService } from '../../services/storage.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  imports: [
    InputSearchComponent,
    MainIcon,
    AvatarModule,
    AvatarGroupModule,
    OverlayBadgeModule,
    MenuModule,
    ButtonModule,
    RouterLink
],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {
  private _storageService = inject(StorageService);
  private router = inject(Router);
  isLoggedIn = signal<boolean>(
    this._storageService.getSessionStorageValue('access_token') ? true : false,
  );

  items: MenuItem[] = [
    {
      label: 'Options',
      items: [
        {
          label: 'Logout',
          icon: 'pi pi-sign-out',
        },
      ],
    },
  ];

  logout() {
    console.log('logout');
    this._storageService.clearLocalStorage();
    this._storageService.clearSessionStorage();
    this.router.navigate(['/login']);
  }
}
