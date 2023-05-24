import { Component, Input, OnInit } from '@angular/core';
import { DatosContribuyentesService } from 'src/app/services/datos-contribuyentes.service';


@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {

  public datosMarcas: any = [];

  constructor( private datosServices: DatosContribuyentesService ){}

  ngOnInit(): void {
    this.cargarData();
  }

  cargarData(){
    this.datosServices.cargarDatos()
        .subscribe( (resp: any) => {
          this.datosMarcas = resp.marcas;
          console.log(resp.marcas);
        });
  }

  cambiarEstado(index: number) {
    if (this.datosMarcas[index].estado === 'Disponible') {
      this.datosMarcas[index].estado = 'No disponible';
      this.datosMarcas[index].btn = 'Habilitar';
    } else {
      this.datosMarcas[index].estado = 'Disponible';
      this.datosMarcas[index].btn = 'Remover';
    }
    
    // Guardar los datos actualizados en el LocalStorage
    // localStorage.setItem('datosMarcas', JSON.stringify(this.datosMarcas));
  }
}
