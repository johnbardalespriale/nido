import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { AgrupacionComponent } from './agrupacion/agrupacion.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { SecuenciaComponent } from './secuencia/secuencia.component';
import { SilabasComponent } from './silabas/silabas.component';

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
  },
  {
    path: 'memoria',
    component: MemoriaComponent
  },
  {
    path: 'secuencia',
    component: SecuenciaComponent
  },
  {
    path: 'silabas',
    component: SilabasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }