import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import { DatosContribuyentesService } from 'src/app/services/datos-contribuyentes.service';
import * as JsonToXML from 'js2xmlparser';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
  // xmlContent: SafeHtml = '';
  xmlContent = '';

  constructor(private datosServices: DatosContribuyentesService,
              private sanitizer: DomSanitizer ){}
              

  ngOnInit(): void {
    this.cargarData();
  }

  imprimirxml(){
    const xml = JsonToXML.parse('datos', this.datosComprobantes);
    this.xmlContent = (xml);
    // this.xmlContent = this.sanitizer.bypassSecurityTrustHtml(xml);
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
