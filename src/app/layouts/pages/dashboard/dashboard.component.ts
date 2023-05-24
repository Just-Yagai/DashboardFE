import { Component } from '@angular/core';
import { DatosContribuyentesService } from 'src/app/services/datos-contribuyentes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  rnc!: string;
  datosContribuyente: any;
  datosCertificacion: any;

  constructor(private dataServices: DatosContribuyentesService){}

  buscarContribuyente() {
    
    if (!this.rnc){
      return;
    }

    this.dataServices.buscarContribuyentes(this.rnc).subscribe(
      (response) => {
        this.datosContribuyente = response.datos_contribuyentes[0];
        this.datosCertificacion = response.datos_certificacion[0];
      },
      (error) => {
        console.error('Error al buscar el contribuyente:', error);
      }
    );
  }

}
