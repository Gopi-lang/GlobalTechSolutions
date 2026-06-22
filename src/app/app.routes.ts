import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent),
    title: 'Global Tech | Home - International Manpower Solutions'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent),
    title: 'About Us | Global Tech'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services').then(m => m.ServicesComponent),
    title: 'Our Services | Global Tech'
  },
  {
    path: 'careers',
    loadComponent: () => import('./pages/careers/careers').then(m => m.CareersComponent),
    title: 'Current Job Openings | Global Tech'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent),
    title: 'Contact Us | Global Tech'
  },
  {
    path: '**',
    redirectTo: ''
  }
];