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

  buscarGifs(query: string = '') {

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this.historial.splice(0, 10);
    }

    console.log(this._historial);
  }
}
