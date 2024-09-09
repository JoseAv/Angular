import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gifs } from '../../Interfaces/Gifs';

@Component({
  selector: 'gifs-page-home',
  templateUrl: './gifs-page-home.component.html',

})
export class HomePagesComponent {


  constructor(private gifsService: GifsService) {

  }

  get gifs(): Gifs[] {
    return this.gifsService.gifsList
  }


}
