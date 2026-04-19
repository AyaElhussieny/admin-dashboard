import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./feature/pages/dashboard/dashboard').then((p) => p.Dashboard),
    title: 'Dashboard',
  },
  {
    path: 'Orders',
    loadComponent: () => import('./feature/pages/orders/orders').then((p) => p.Orders),
    title: 'Orders',
  },
];
