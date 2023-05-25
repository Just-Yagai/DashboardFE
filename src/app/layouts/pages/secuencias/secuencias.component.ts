import { Component, OnInit } from '@angular/core';
import { DatosContribuyentesService } from 'src/app/services/datos-contribuyentes.service';

@Component({
  selector: 'app-secuencias',
  templateUrl: './secuencias.component.html',
  styleUrls: ['./secuencias.component.css']
})
export class SecuenciasComponent implements OnInit {

  public datosSecuencias: any = [];

  constructor( private datosServices: DatosContribuyentesService ){}

  ngOnInit(): void {
    // this.cargarData();
  }

  cargarData(){
    this.datosServices.cargarDatos()
        .subscribe( (resp: any) => {
          this.datosSecuencias = resp.secuencias;
          console.log(resp.secuencias);
        })
  }

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
