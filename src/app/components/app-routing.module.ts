import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { AgrupacionComponent } from './agrupacion/agrupacion.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { SecuenciaComponent } from './secuencia/secuencia.component';
import { SilabasComponent } from './silabas/silabas.component';
import { IgualDiferenteComponent } from './igual-diferente/igual-diferente.component';
import { FiguraGeometricaComponent } from './figura-geometrica/figura-geometrica.component';
import { ContabilidadNumericaComponent } from './contabilidad-numerica/contabilidad-numerica.component';
import { MenorMayorComponent } from './menor-mayor/menor-mayor.component';
import { CuantificadoresComponent } from './cuantificadores/cuantificadores.component';
import { PertenenciaComponent } from './pertenencia/pertenencia.component';
import { HoraComponent } from './hora/hora.component';
import { DiferenteComponent } from './diferente/diferente.component';
import { AbsurdosComponent } from './absurdos/absurdos.component';
import { CuadroDobleComponent } from './cuadro-doble/cuadro-doble.component';
import { ConjuntoComponent } from './conjunto/conjunto.component';

const routes: Routes = [
  { path: '', redirectTo: '/actividades', pathMatch: 'full' },
  {
    path: 'home',
    component: HeaderComponent,
  },
  {
    path: 'actividades',
    component: ActividadesComponent,
  },
  {
    path: 'agrupacion',
    component: AgrupacionComponent,
  },
  {
    path: 'memoria',
    component: MemoriaComponent,
  },
  {
    path: 'secuencia',
    component: SecuenciaComponent,
  },
  {
    path: 'silabas',
    component: SilabasComponent,
  },
  {
    path: 'igual-diferente',
    component: IgualDiferenteComponent,
  },
  {
    path: 'figura-geometrica',
    component: FiguraGeometricaComponent,
  },
  {
    path: 'contabilidad-numerica',
    component: ContabilidadNumericaComponent,
  },
  {
    path: 'menor-mayor',
    component: MenorMayorComponent,
  },
  {
    path: 'cuantificadores',
    component: CuantificadoresComponent,
  },
  {
    path: 'pertenencia',
    component: PertenenciaComponent,
  },
  {
    path: 'hora',
    component: HoraComponent,
  },
  {
    path: 'diferente',
    component: DiferenteComponent,
  },
  {
    path: 'absurdos',
    component: AbsurdosComponent,
  },
  {
    path: 'cuadro-doble',
    component: CuadroDobleComponent,
  },
  {
    path: 'conjunto',
    component: ConjuntoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
