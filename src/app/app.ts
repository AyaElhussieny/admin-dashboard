import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardLayout } from './core/layout/dashboard-layout/dashboard-layout';

@Component({
  selector: 'app-root',
  imports: [DashboardLayout],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('admin-dashboard');
}
