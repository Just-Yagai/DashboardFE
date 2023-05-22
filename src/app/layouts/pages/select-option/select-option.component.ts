import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.css']
})
export class SelectOptionComponent {

  @Input() ver: boolean;
  @Input() comprobante: boolean;
  @Input() nrocomprobante: boolean;

  constructor(){
    this.ver = false;
    this.comprobante = false;
    this.nrocomprobante = false;
  }
}
