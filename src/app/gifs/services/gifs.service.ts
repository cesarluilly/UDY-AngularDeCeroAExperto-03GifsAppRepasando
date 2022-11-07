import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ISearchGifsResponse, IGif } from '../Interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _apiKey       : string     = '1yw5MedL4sPhVszbbHjj06tKlD7ygmDA';
  private _servicioUrl  :string = 'https://api.giphy.com/v1/gifs';
  private _historial    :string[] = [];

  public resultados:IGif[] = [];

  public get historial(){
    return [...this._historial]
  }

  constructor(
    private http: HttpClient
  ){
    
    this._historial = JSON.parse(localStorage.getItem('historial')!)  || [];
    // if(localStorage.getItem('historial')){
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }

    this.resultados = JSON.parse(localStorage.getItem('resultados')!)  || [];
    
  }

  public buscarGifs(query:string = ""):void{
    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes(query) ){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('limits', '10')
      .set('q', query);
    
    this.http.get<ISearchGifsResponse>(`${this._servicioUrl}/search`,{params : params})
      .subscribe((resp:ISearchGifsResponse)=> {
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados));
      });
      
    

    //              //A como se haria con javascript pero es puro pero es mucha carpinteria 
    //              //  y talacha.
    // fetch('https://api.giphy.com/v1/gifs/search?api_key=1yw5MedL4sPhVszbbHjj06tKlD7ygmDA&q=naruto&limit=10')
    //   .then(resp => {
    //     resp.json().then(data => {
    //       console.log(data);
    //     })
    //   })

    console.log(this.resultados);
  }
}
