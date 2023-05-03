import {Component, Input, OnInit} from '@angular/core';
import {Gif} from "../../interfaces/gif.interface";

@Component({
  selector: 'app-gif-card',
  templateUrl: './gif-card.component.html',
  styles: []
})
export class GifCardComponent implements OnInit {

  @Input() gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('GIF property is required');
  }

}
