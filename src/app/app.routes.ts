import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/finder' },
  { path: 'finder', loadChildren: () => import('./pages/finder/finder.routes').then(m => m.FINDER_ROUTES) },
  { path: 'constructor', loadChildren: () => import('./pages/constructor/constructor.routes').then(m => m.CONSTRUCTOR_ROUTES) },
  { path: 'metalayer', loadChildren: () => import('./pages/metalayer/metalayer.routes').then(m => m.METALAYER_ROUTES) },
];

@NgModule ({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AppRouitingMpdule {}