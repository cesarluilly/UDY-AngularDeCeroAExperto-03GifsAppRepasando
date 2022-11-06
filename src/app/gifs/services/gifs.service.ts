import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _apiKey: string     = '1yw5MedL4sPhVszbbHjj06tKlD7ygmDA';
  private _historial:string[] = [];

  public get historial(){
    return [...this._historial]
  }

  public buscarGifs(query:string = ""):void{
    query = query.trim().toLocaleLowerCase();

    
    if(
      !this._historial.includes(query)
      ){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

    }

    console.log(this._historial);
  }
}
