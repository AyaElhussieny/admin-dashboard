import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./feature/pages/dashboard/dashboard').then((p) => p.Dashboard),
    title: 'Dashboard',
  },
];
