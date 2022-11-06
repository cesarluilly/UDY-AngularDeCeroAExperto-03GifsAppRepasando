import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent{

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  public buscar():void{
    console.log(this.txtBuscar.nativeElement.value);
    this.txtBuscar.nativeElement.value = "";
  }
}
