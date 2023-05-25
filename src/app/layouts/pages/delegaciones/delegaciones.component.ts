import { Component, OnInit } from '@angular/core';
import { DatosContribuyentesService } from 'src/app/services/datos-contribuyentes.service';

@Component({
  selector: 'app-delegaciones',
  templateUrl: './delegaciones.component.html',
  styleUrls: ['./delegaciones.component.css']
})
export class DelegacionesComponent implements OnInit {

  public datosDelegaciones: any = [];

  constructor( private datosServices: DatosContribuyentesService ){}

  ngOnInit(): void {
    // this.cargarData();
  }

  cargarData(){
    this.datosServices.cargarDatos()
        .subscribe( (resp: any) => {
          this.datosDelegaciones = resp.delegaciones;
          console.log(resp.delegaciones);
        });
  }

  isSelected: boolean = false;

  selectPointer(value: boolean) {
    this.isSelected = value;
  }
  
  // Modal Delegaciones
  rncModal: string = '';
  fechaRegistroModal: string = '';
  fechaActualizacionModal: string = '';
  identificacionModal: string = '';

  setRncModal(rnc_delegado: string) {
    this.rncModal = rnc_delegado;
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
