import { Component } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { NavBar } from '../nav-bar/nav-bar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  imports: [SideBarComponent, NavBar, RouterOutlet],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.css',
})
export class DashboardLayout {}
