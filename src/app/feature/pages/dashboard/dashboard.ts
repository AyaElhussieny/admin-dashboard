import { Component } from '@angular/core';
import { SideBarComponent } from '../../../core/layout/side-bar/side-bar.component';
import { InputSearchComponent } from '../../../shared/UI/input-search/input-search.component';
import { NavBar } from "../../../core/layout/nav-bar/nav-bar";

@Component({
  selector: 'app-dashboard',
  imports: [SideBarComponent, NavBar],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
