import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import { DatosContribuyentesService } from 'src/app/services/datos-contribuyentes.service';

// interface RespuestaData {
//   comprobante: any[];
// }

@Component({
  selector: 'app-comprobantes',
  templateUrl: './comprobantes.component.html',
  styleUrls: ['./comprobantes.component.css']
})
export class ComprobantesComponent implements OnInit {

  public datosComprobantes: any = [];

  constructor( private datosServices: DatosContribuyentesService ){}

  ngOnInit(): void {
    this.cargarData();
  }

  cargarData(){
    this.datosServices.cargarDatos()
        .subscribe( (resp: any) => {
          this.datosComprobantes = resp.comprobante;
          console.log(resp.comprobante);
        });
  }

  // public cargarData(){
  //   this.comprobanteService.get(`assets/json/datos.json`)
  //   .subscribe( respuesta => {
  //     console.log(respuesta);
  //   });
  // }
  
  // public cargarData() {
  //   this.comprobanteService.get(`assets/json/datos.json`)
  //     .subscribe((respuesta: any) => {
  //       const comprobante = respuesta.comprobante;
  //       console.log(comprobante);
  //       this.datosComprobantes = respuesta.comprobante;
  //       console.log(this.datosComprobantes);
  //     });
  // }

  generatePDF(){
    let doc = new jsPDF("p", "mm", "A4");

    doc.text('Prueba', 25, 25);

    let blob = doc.output("blob");
    
    const url = URL.createObjectURL(blob);
    window.open(url);
  }

  // datosComprobantes: any[] = [
  //   {
  //     rncEmisor: '131880738',
  //     razonSocial: 'Razon social contribuyente',
  //     e_ncf: 'E310000000001',
  //     fechaRecepcion: '07/03/2023',
  //     fechaEmision: '07/03/2023',
  //     rncComprador: '00199999996',
  //     montoTotal: '500',
  //     montoImpuesto: '0',
  //     montoExento: '0',
  //     codigoSeguridad: 'UkCKEI',
  //     aprobacionComercial: 'No',
  //     fechaActualizacion: '16/05/2023 11:00:29 AM',
  //     montoGravado: '0',
  //     totalItbis: '0',
  //     montoNoFacturado: '0',
  //     versionECF: '0',
  //     fechaAprobacionComercial: 'N/A',
  //     estado: 'Disponible', 
  //     fechaRegistro: '16/05/2023 11:00:29 AM',
  //     trackID: 'f66b1999-ff06-4fa1-ac00-ea69b84ad9c7'
  //   }
  // ];

  // Modal
  eNCFModal: string = '';
  fechaRegistroModal: string = '';
  montoTotalModal: string = '';
  montoImpuestoModal: string = '';
  montoExentoModal: string = '';
  codigoSeguridadModal: string = '';
  aprobacionComercialModal: string = '';
  rncCompradorModal: string = '';
  fechaActualizacionModal: string = '';
  montoGravadoModal: string = '';
  totalItbisModal: string = '';
  montoNoFacturadoModal: string = '';
  versionECFModal: string = '';
  fechaAprobacionComercialModal: string = '';
  trackIdModal: string = '';

  settrackID(trackID: string) {
    this.trackIdModal = trackID;
  }

  setENCF(e_ncf: string) {
    this.eNCFModal = e_ncf;
  }

  setFechaRegistro(fechaRegistro: string) {
    this.fechaRegistroModal = fechaRegistro;
  }

  setFechaActualizacion(fechaActualizacion: string) {
    this.fechaActualizacionModal = fechaActualizacion;
  }

  setMontoTotal(montoTotal: string) {
    this.montoTotalModal = montoTotal;
  }

  setMontoImpuesto(montoImpuesto: string) {
    this.montoImpuestoModal = montoImpuesto;
  }

  setMontoExento(montoExento: string) {
    this.montoExentoModal = montoExento;
  }

  setCodigoSeguridad(codigoSeguridad: string) {
    this.codigoSeguridadModal = codigoSeguridad;
  }

  setAprobacionComercial(aprobacionComercial: string) {
    this.aprobacionComercialModal = aprobacionComercial;
  }

  setRncComprador(rncComprador: string) {
    this.rncCompradorModal = rncComprador;
  }

  setMontoGravador(montoGravado: string) {
    this.montoGravadoModal = montoGravado;
  }

  setTotalItbis(totalItbis: string) {
    this.totalItbisModal = totalItbis;
  }

  setMontoNoFacturado(montoNoFacturado: string) {
    this.montoNoFacturadoModal = montoNoFacturado;
  }

  setVersionECF(versionECF: string) {
    this.versionECFModal = versionECF;
  }

  setFechaApronacionComercial(fechaAprobacionComercial: string) {
    this.fechaAprobacionComercialModal = fechaAprobacionComercial
  }
  // end modal
}
