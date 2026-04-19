import { Component } from '@angular/core';
import { InputSearchComponent } from '../../../shared/UI/input-search/input-search.component';
import { MainIcon } from '../../../shared/UI/main-icon/main-icon';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
  selector: 'app-nav-bar',
  imports: [InputSearchComponent, MainIcon, AvatarModule, AvatarGroupModule, OverlayBadgeModule],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar {}
