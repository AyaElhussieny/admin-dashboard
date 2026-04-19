import { Routes } from '@angular/router';
import { ordersResolver } from './feature/services/Orders/orders-resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/layout/dashboard-layout/dashboard-layout').then((P) => P.DashboardLayout),
    resolve: { data: ordersResolver },
    children: [
      {
        path: '',
        loadComponent: () => import('./feature/pages/dashboard/dashboard').then((p) => p.Dashboard),
        title: 'Dashboard',
      },
      {
        path: 'Orders',
        loadComponent: () => import('./feature/pages/orders/orders').then((p) => p.OrdersComponent),
        title: 'Orders',
      },
    ],
  },
];
