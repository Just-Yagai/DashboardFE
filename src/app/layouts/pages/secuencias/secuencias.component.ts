import { Component, Input, OnInit } from '@angular/core';
import { SecuenciasService } from 'src/app/services/secuencias.service';

@Component({
  selector: 'app-secuencias',
  templateUrl: './secuencias.component.html',
  styleUrls: ['./secuencias.component.css']
})
export class SecuenciasComponent implements OnInit {

  public Secuencias: any = [];

  constructor( private getServices: SecuenciasService){}

  ngOnInit(): void {
    this.getSecuencias();
  }

  getSecuencias(){
    this.getServices.getData()
        .subscribe( (resp: any) => {
          this.Secuencias = resp.datosSecuencias;
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
