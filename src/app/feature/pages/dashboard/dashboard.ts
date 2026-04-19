import { Component } from '@angular/core';
import { SideBarComponent } from '../../../core/layout/side-bar/side-bar.component';
import { NavBar } from '../../../core/layout/nav-bar/nav-bar';
import { Analytics } from '../../../shared/bussiness/analytics/analytics';
import { Table } from '../../../shared/UI/table/table';

@Component({
  selector: 'app-dashboard',
  imports: [SideBarComponent, NavBar , Analytics , Table],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
