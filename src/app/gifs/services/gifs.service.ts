import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  private apiKey: string = 'qC7cXKpPcSnVnBpfpzfv54jdSXWTqIOr';


  get historial(): string[] {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
  }

  buscarGifs(query: string = '') {

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this.historial.splice(0, 10);
    }

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=qC7cXKpPcSnVnBpfpzfv54jdSXWTqIOr&limit=10&q=dbz')
      .subscribe((resp: any) => {
        console.log(resp.data);
      });

  }
}
