import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import {TextService} from 'src/app/services/text.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
// export class DashboardComponent implements OnInit {
export class DashboardComponent implements OnInit{

  selectedTipoCertificacion: any = [];
  tiposCertificacion: any = [];

  // ngOnInit(): void {
  //   this.getDashboard();
  // }

  constructor(private certificacionService: TextService) {}

  ngOnInit(): void {
    this.select();
  }

  select(){
    this.certificacionService.getCertificaciones().subscribe(data => {
      this.tiposCertificacion = data;
    });
  }

  onTipoCertificacionChange() {
    const tipoSeleccionado = this.tiposCertificacion.find(
    (tipo: { tipo: string }) => tipo.tipo=== this.selectedTipoCertificacion
  );

  if (tipoSeleccionado) {
    this.selectedTipoCertificacion = tipoSeleccionado;
  }
  }
    

  // getDashboard(){
  //   this.getServices.getData()
  //       .subscribe( (resp: any) => {
  //         // console.log(resp);
  //         this.datosDashboard = resp.tipo_certificacion;
  //       })
  // }

  // selectedOption?: string;
  // estado?: string;
  // inicioPostulacion?: string;
  // finalizacionPostulacion?: string;

  // onOptionChange() {
  //   switch (this.selectedOption) {
  //     case 'emisor':
  //       this.setPostulacionData('Registrado', '26/05/2023', '30/06/2023');
  //       break;
  //     case 'proveedor':
  //       this.setPostulacionData('Registrado', '4/07/2023', '16/08/2023');
  //       break;
  //     default:
  //       this.clearPostulacionData();
  //       break;
  //   }
  // }
  
  // setPostulacionData(estado: string, inicioPostulacion: string, finalizacionPostulacion: string) {
  //   this.estado = estado;
  //   this.inicioPostulacion = inicioPostulacion;
  //   this.finalizacionPostulacion = finalizacionPostulacion;
  // }
  // clearPostulacionData() {
  //   this.setPostulacionData('', '', '');
  // }

  // rnc!: string;
  // datosContribuyente: any;
  // datosCertificacion: any;

  // buscarContribuyente() {

  //   if (!this.rnc){
  //     return;
  //   }

  //   this.dataServices.buscarContribuyentes(this.rnc).subscribe(
  //     (response) => {
  //       this.datosContribuyente = response.datos_contribuyentes[0];
  //       this.datosCertificacion = response.datos_certificacion[0];
  //     },
  //     (error) => {
  //       console.error('Error al buscar el contribuyente:', error);
  //     }
  //   );
  // }
}
