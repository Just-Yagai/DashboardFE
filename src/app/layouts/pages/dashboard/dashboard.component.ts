import { Component } from '@angular/core';
import { DatosContribuyentesService } from 'src/app/services/datos-contribuyentes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  selectedOption?: string;
  estado?: string;
  inicioPostulacion?: string;
  finalizacionPostulacion?: string;

  // onOptionChange() {
  //   if (this.selectedOption === 'emisor') {
  //     this.estado = 'Registrado';
  //     this.inicioPostulacion = '26-05-2023';
  //     this.finalizacionPostulacion = '30-06-2023';
  //   } else if (this.selectedOption === 'receptor') {
  //     this.estado = 'No Registrado';
  //     this.inicioPostulacion = '4/07/2023';
  //     this.finalizacionPostulacion = '16/08/2023';
  //   } else {
  //     this.estado = '';
  //     this.inicioPostulacion = '';
  //     this.finalizacionPostulacion = '';
  //   }
  // }

  onOptionChange() {
    switch (this.selectedOption) {
      case 'emisor':
        this.setPostulacionData('Registrado', '26/05/2023', '30/06/2023');
        break;
      case 'proveedor':
        this.setPostulacionData('Registrado', '4/07/2023', '16/08/2023');
        break;
      default:
        this.clearPostulacionData();
        break;
    }
  }
  setPostulacionData(estado: string, inicioPostulacion: string, finalizacionPostulacion: string) {
    this.estado = estado;
    this.inicioPostulacion = inicioPostulacion;
    this.finalizacionPostulacion = finalizacionPostulacion;
  }
  clearPostulacionData() {
    this.setPostulacionData('', '', '');
  }

  // rnc!: string;
  // datosContribuyente: any;
  // datosCertificacion: any;

  constructor(private dataServices: DatosContribuyentesService) { }

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
