import { Routes } from '@angular/router';
import { ordersResolver } from './feature/services/Orders/orders-resolver';
import { logoutGuard } from './core/guards/logout.guard';
import { loginGuard } from './core/guards/login.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./core/layout/dashboard-layout/dashboard-layout').then((P) => P.DashboardLayout),
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
        resolve: { data: ordersResolver },
        canActivate: [loginGuard],
      },
    ],
  },

  {
    path: 'login',
    loadComponent: () => import('./core/pages/login/login').then((P) => P.Login),
    title: 'Login',
    canActivate: [logoutGuard],
  },
];
