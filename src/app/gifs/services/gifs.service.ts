import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];


  get historial(): string[] {
    return [...this._historial];
  }

  constructor() {
  }

  buscarGifs(query: string) {
    this._historial.unshift(query);
    console.log(this._historial);
  }
}
