import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MarcasComponent } from './pages/marcas/marcas.component';
import { DelegacionesComponent } from './pages/delegaciones/delegaciones.component';
import { SecuenciasComponent } from './pages/secuencias/secuencias.component';
import { ComprobantesComponent } from './pages/comprobantes/comprobantes.component';
import { FormsModule } from '@angular/forms';
import { SelectOptionComponent } from './pages/select-option/select-option.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    DashboardComponent,
    MarcasComponent,
    DelegacionesComponent,
    SecuenciasComponent,
    ComprobantesComponent,
    SelectOptionComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    FormsModule,
    NgSelectModule
  ]
})
export class LayoutsModule { }
