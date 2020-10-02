import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';

/*Components*/
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './header/header.component';
import { AgrupacionComponent } from './agrupacion/agrupacion.component';
import { ActividadesComponent } from './actividades/actividades.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { TrazosComponent } from './trazos/trazos.component';
import { FigurasGemoetricasComponent } from './figuras-gemoetricas/figuras-gemoetricas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AgrupacionComponent,
    ActividadesComponent,
    MemoriaComponent,
    SecuenciaComponent,
    SilabasComponent,
    IgualDiferenteComponent,
    FiguraGeometricaComponent,
    ContabilidadNumericaComponent,
    MenorMayorComponent,
    CuantificadoresComponent,
    PertenenciaComponent,
    HoraComponent,
    DiferenteComponent,
    AbsurdosComponent,
    CuadroDobleComponent,
    ConjuntoComponent,
    TrazosComponent,
    FigurasGemoetricasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    MatRadioModule,
    DragDropModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
