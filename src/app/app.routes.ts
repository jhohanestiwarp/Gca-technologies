import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'Inicio',
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: 'page_1',
    title: 'Pagina 1',
    loadComponent: () => import('./pages/page_1/page_1.component'),
  },
  {
    path: 'page_2',
    title: 'Pagina 2',
    loadComponent: () => import('./pages/page_2/page_2.component'),
  },
  {
    path: 'page_3',
    title: 'Pagina 3',
    loadComponent: () => import('./pages/page_3/page_3.component'),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
