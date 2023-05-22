import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MarcasComponent } from './pages/marcas/marcas.component';
import { DelegacionesComponent } from './pages/delegaciones/delegaciones.component';
import { SecuenciasComponent } from './pages/secuencias/secuencias.component';
import { ComprobantesComponent } from './pages/comprobantes/comprobantes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'marcas', component: MarcasComponent },
      { path: 'delegaciones', component: DelegacionesComponent },
      { path: 'secuencias', component: SecuenciasComponent },
      { path: 'comprobantes', component: ComprobantesComponent },
      { path: '**', redirectTo: 'dashboard' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
