import { Component } from '@angular/core';

@Component({
  selector: 'app-delegaciones',
  templateUrl: './delegaciones.component.html',
  styleUrls: ['./delegaciones.component.css']
})
export class DelegacionesComponent {

  isSelected: boolean = false;

  selectPointer(value: boolean) {
    this.isSelected = value;
  }
  
  // Modal Delegaciones
  rncModal: string = '';
  fechaRegistroModal: string = '';
  fechaActualizacionModal: string = '';
  identificacionModal: string = '';

  setRncModal(rnc: string) {
    this.rncModal = rnc;
  }

  setFechaRegistro(fechaRegistro: string) {
    this.fechaRegistroModal = fechaRegistro;
  }

  setFechaActualizacion(fechaActualizacion: string) {
    this.fechaActualizacionModal = fechaActualizacion;
  }

  setIdentificacion(identificacion: string) {
    this.identificacionModal = identificacion;
  }
  // end modal


  editingRow: number = -1; // -1 indicates no row is being edited
  originalData: any = {}; 
  lista: string[] = ["✓", "X"];
  listaEstado: string[] = ["Activo", "Inactivo"];

  datosDelegaciones: any[] = [
    {
      rnc: '00199999996',
      firmanteAutorizado: null,
      solicitanteAutorizado: null,
      aprobadorComercial: null,
      administrador: null,
      estado: null,
      identificacion: '40212599253',
      fechaRegistro: '15/01/2023',
      fechaActualizacion: '23/09/2025'
    },
    {
      rnc: '00188888886',
      firmanteAutorizado: null,
      solicitanteAutorizado: null,
      aprobadorComercial: null,
      administrador: null,
      estado: null,
      identificacion: '40253689562',
      fechaRegistro: '14/05/2023',
      fechaActualizacion: '12/05/2023'
    },
  ];

  buttonStates: boolean[][] = [
    [false, false], // Columna de firmanteAutorizado
    [false, false], // Columna de solicitanteAutorizado
    [false, false], // Columna de aprobadorComercial
    [false, false] // Columna de administrador
  ];

  selectButton(rowIndex: number, columnIndex: number, value: boolean) {
    this.buttonStates[columnIndex][rowIndex] = value;
  }

  selectOption(row: any, field: string, value: string) {
    row[field] = value === 'si' ? '✓' : 'X';
  }

  isFirmanteAutorizadoSelected: boolean = false;

  selectFirmanteAutorizado(value: boolean) {
    this.isFirmanteAutorizadoSelected = value;
  }

  isSolicitanteAutorizadoSelected: boolean = false;

  selectSolicitanteAutorizado(value: boolean) {
    this.isSolicitanteAutorizadoSelected = value;
  }

  startEditing(index: number) {
    this.editingRow = index;
    this.originalData[index] = { ...this.datosDelegaciones[index] };
  }

  cancelEditing() {
    this.datosDelegaciones[this.editingRow] = { ...this.originalData[this.editingRow] };
    this.editingRow = -1;
  }

  saveChanges(){
    this.editingRow = -1;
  }

}
