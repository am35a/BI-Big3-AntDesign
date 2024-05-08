import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  { path: 'constructor', loadChildren: () => import('./pages/constructor/constructor.routes').then(m => m.CONSTRUCTOR_ROUTES) },
];

@NgModule ({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AppRouitingMpdule {}