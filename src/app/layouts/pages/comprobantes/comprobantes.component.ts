import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import { DatosContribuyentesService } from 'src/app/services/datos-contribuyentes.service';
import * as JsonToXML from 'js2xmlparser';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ComprobantesService } from 'src/app/services/comprobantes/comprobantes.service';

// interface RespuestaData {
//   comprobante: any[];
// }

@Component({
  selector: 'app-comprobantes',
  templateUrl: './comprobantes.component.html',
  styleUrls: ['./comprobantes.component.css']
})
export class ComprobantesComponent implements OnInit {

  public rncEstado: any = [];

  constructor( private datosServices: ComprobantesService ){}
              

  ngOnInit(): void {
    this.cargarData();
  }

  cargarData(){
    this.datosServices.cargarDatos()
        .subscribe( (resp: any) => {
          // console.log(resp);
          this.rncEstado = resp.datosrncEstado;
        });
  }

  isSelected: boolean = false;

  selectPointer(value: boolean) {
    this.isSelected = value;
  }

  editingRow: number = -1; // -1 indicates no row is being edited
  originalData: any = {}; 
  lista: string[] = ["✓", "X"];
  listaEstado: string[] = ["Activo", "Inactivo"];

  buttonStates: boolean[][] = [
    [false, false], 
    [false, false], 
    [false, false], 
    [false, false]
  ];

  selectButton(rowIndex: number, columnIndex: number, value: boolean) {
    this.buttonStates[columnIndex][rowIndex] = value;
  }

  selectOption(row: any, field: string, value: string) {
    row[field] = value === 'si' ? '✓' : 'X';
  }

  isEstado: boolean = false;

  selectEstado(value: boolean) {
    this.isEstado = value;
  }

  isAutorizadoAFacturar: boolean = false;

  selectAutorizadoAFacturar(value: boolean) {
    this.isAutorizadoAFacturar = value;
  }

  isGrandeContribuyente: boolean = false;

  selectGrandeContribuyente(value: boolean) {
    this.isGrandeContribuyente = value;
  }

  startEditing(index: number) {
    this.editingRow = index;
    this.originalData[index] = { ...this.rncEstado[index] };
  }

  cancelEditing() {
    this.rncEstado[this.editingRow] = { ...this.originalData[this.editingRow] };
    this.editingRow = -1;
  }

  saveChanges(){
    this.editingRow = -1;
  }
}
