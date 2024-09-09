import { Component, Input } from '@angular/core';
import { Gifs } from '../../Interfaces/Gifs';

@Component({
  selector: 'gifs-components-list',
  templateUrl: './gifs-components-list.html',
  styleUrl: './gifs-components-list.css'
})
export class ListComponent {

  @Input()
  public GifsList: Gifs[] = []


}
