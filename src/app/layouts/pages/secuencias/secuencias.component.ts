import { Component } from '@angular/core';

@Component({
  selector: 'app-secuencias',
  templateUrl: './secuencias.component.html',
  styleUrls: ['./secuencias.component.css']
})
export class SecuenciasComponent {

  datosSecuencias: any[] = [
    {
      e_CF: 'Factura de Crédito Fiscal Electrónica (31)',
      secuenciaDesde: '1',
      secuenciaHasta: '3,000',
      nroAutorizacion: '123456',
      estado: 'Activa',
      realizadoEmision: 'Si',
      fechaRegistro2: '13/05/2023',
      fechaDesde: '14/05/2023',
      fechaHasta: '15/05/2023'
    },
    {
      e_CF: 'Factura de Consumo Electrónica (32)',
      secuenciaDesde: '1',
      secuenciaHasta: '1,000',
      nroAutorizacion: '111222',
      estado: 'Activa',
      realizadoEmision: 'Si',
      fechaRegistro2: '16/05/2023',
      fechaDesde: '17/05/2023',
      fechaHasta: '18/05/2023'
    },
    {
      e_CF: 'Nota de Débito Electrónica (33)',
      secuenciaDesde: '1',
      secuenciaHasta: '500',
      nroAutorizacion: '333444',
      estado: 'Activa',
      realizadoEmision: 'No',
      fechaRegistro2: '19/05/2023',
      fechaDesde: '20/05/2023',
      fechaHasta: '21/05/2023'
    },
    {
      e_CF: 'Nota de Débito Electrónica (34)',
      secuenciaDesde: '1',
      secuenciaHasta: '500',
      nroAutorizacion: '555666',
      estado: 'Activa',
      realizadoEmision: 'No',
      fechaRegistro2: '22/05/2023',
      fechaDesde: '23/05/2023',
      fechaHasta: '24/05/2023'
    },
    {
      e_CF: 'Compras Electrónico (41)',
      secuenciaDesde: 'N/A',
      secuenciaHasta: 'N/A',
      nroAutorizacion: 'N/A',
      estado: 'N/A',
      realizadoEmision: 'No',
      fechaRegistro2: '25/05/2023',
      fechaDesde: '26/05/2023',
      fechaHasta: '27/05/2023'
    },
    {
      e_CF: 'Gastos Menores Electrónico (43)',
      secuenciaDesde: '1',
      secuenciaHasta: '200',
      nroAutorizacion: '777888',
      estado: 'Activa',
      realizadoEmision: 'Si',
      fechaRegistro2: '28/05/2023',
      fechaDesde: '29/05/2023',
      fechaHasta: '30/05/2023'
    },
    {
      e_CF: 'Regímenes Especiales Electrónico (44)',
      secuenciaDesde: 'N/A',
      secuenciaHasta: 'N/A',
      nroAutorizacion: 'N/A',
      estado: 'N/A',
      realizadoEmision: 'No',
      fechaRegistro2: '31/05/2023',
      fechaDesde: '01/06/2023',
      fechaHasta: '02/06/2023'
    },
    {
      e_CF: 'Gubernamental Electrónico (45)',
      secuenciaDesde: '1',
      secuenciaHasta: '300',
      nroAutorizacion: '999555',
      estado: 'Inactiva',
      realizadoEmision: 'No',
      fechaRegistro2: '03/06/2023',
      fechaDesde: '04/06/2023',
      fechaHasta: '05/06/2023'
    },
    {
      e_CF: 'Comprobante de Exportaciones Electrónico (46)',
      secuenciaDesde: 'N/A',
      secuenciaHasta: 'N/A',
      nroAutorizacion: 'N/A',
      estado: 'N/A',
      realizadoEmision: 'No',
      fechaRegistro2: '06/06/2023',
      fechaDesde: '07/06/2023',
      fechaHasta: '08/06/2023'
    },
    {
      e_CF: 'Comprobante para Pagos al Exterior Electrónico (47)',
      secuenciaDesde: 'N/A',
      secuenciaHasta: 'N/A',
      nroAutorizacion: 'N/A',
      estado: 'N/A',
      realizadoEmision: 'No',
      fechaRegistro2: '09/06/2023',
      fechaDesde: '10/06/2023',
      fechaHasta: '11/06/2023'
    },
  ];

  // Modal Secuencias
  fechaRegistroModal2: string = '';
  fechaDesdeModal: string = '';
  fechaHastaModal: string = '';

  setFechaRegistro2(fechaRegistro2: string) {
    this.fechaRegistroModal2 = fechaRegistro2;
  }

  setFechaDesdeModal(fechaDesde: string) {
    this.fechaDesdeModal = fechaDesde;
  }

  setFechaHastaModal(fechaHasta: string) {
    this.fechaHastaModal = fechaHasta;
  }
  // end modal

}
