import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  public cesar:string = "cesar";
  public get historial():string[]{
    return this._gifsService.historial;
  }
  constructor(
    private _gifsService:GifsService
  ) { 

  }

  public buscar(termino:string){
    this._gifsService.buscarGifs(termino);
  }
  
}
