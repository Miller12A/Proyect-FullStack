import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'cursos',
        title: 'Cursos',
        loadComponent: () => import('./dashboard/pages/cursos/cursos.component')
      },
      {
        path: 'materias',
        title: 'Materias',
        loadComponent: () => import('./dashboard/pages/materias/materias.component')
      },
      {
        path: 'students',
        title: 'Students',
        loadComponent: () => import('./dashboard/pages/students/students.component')
      },
      {
        path: 'tasks',
        title: 'Tasks',
        loadComponent: () => import('./dashboard/pages/tasks/tasks.component')
      },
      {
        path: 'teachers',
        redirectTo: 'Teachers',
        loadComponent: () => import('./dashboard/pages/teachers/teachers.component')
      },
      {
        path: 'users',
        redirectTo: 'Users',
        loadComponent: () => import('./dashboard/pages/users/users.component')
      },
      {
        path: '', redirectTo: 'users', pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
