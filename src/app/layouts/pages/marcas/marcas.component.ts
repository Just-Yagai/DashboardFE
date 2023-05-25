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
        .subscribe(resp => {
          console.log(resp);
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
