import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _apiKey: string     = '1yw5MedL4sPhVszbbHjj06tKlD7ygmDA';
  private _historial:string[] = [];

  public get historial(){
    return [...this._historial]
  }

  constructor(
    private http: HttpClient
  ){
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=1yw5MedL4sPhVszbbHjj06tKlD7ygmDA&q=naruto&limit=10')
      .subscribe((resp:any)=> {
        console.log(resp.data);
      });
  }

  public buscarGifs(query:string = ""):void{
    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes(query) ){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    //              //A como se haria con javascript pero es puro pero es mucha carpinteria 
    //              //  y talaha.
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=1yw5MedL4sPhVszbbHjj06tKlD7ygmDA&q=naruto&limit=10')
    //   .then(resp => {
    //     resp.json().then(data => {
    //       console.log(data);
    //     })
    //   })

    console.log(this._historial);
  }
}
