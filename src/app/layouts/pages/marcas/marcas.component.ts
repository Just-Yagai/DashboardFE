import { Component, Input, OnInit } from '@angular/core';
import { DatosContribuyentesService } from 'src/app/services/datos-contribuyentes.service';
import { MarcasService } from 'src/app/services/marcas.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  public datosMarcas: any = [];

  constructor( private dataService: MarcasService ){}

  ngOnInit(): void {
    this.cargarData();
  }

  cargarData(){
    this.dataService.getData()
        .subscribe( resp => {
          this.datosMarcas = resp;
        });
  }

  // cargarData(){
  //   this.dataService.getData()
  //       .subscribe( resp => {
  //         this.datosMarcas = resp;
  //         console.log(resp);
  //       });
  // }

  // cambiarEstado(marca: any) {
  //   if (marca.estado === 'Disponible') {
  //     marca.estado = 'No disponible';
  //   } else {
  //     marca.estado = 'Disponible';
  //   }

  //   this.dataService.actualizarMarca(marca)
  //     .subscribe(resp => {
  //       console.log(resp);
  //     });
  // }

  // cargarData(){
  //   const data = this.dataService.getDataLocalStorage();

  //   if (data) {
  //     this.datosMarcas = data;
  //   }else{
  //     this.dataService.getData()
  //         .subscribe((resp: any) => {
  //           this.datosMarcas = resp;
  //           console.log(resp);
  //         });
  //   }
  // }

  // cambiarEstado(index: number) {

  // }
}
