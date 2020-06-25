import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { AgrupacionComponent } from './agrupacion/agrupacion.component';
import { ActividadesComponent } from './actividades/actividades.component';

const routes: Routes = [
  { path: '', redirectTo: '/actividades', pathMatch: 'full' },
  {
    path: 'home',
    component: HeaderComponent
  },
  {
    path: 'actividades',
    component: ActividadesComponent
  },
  {
    path: 'agrupacion',
    component: AgrupacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }