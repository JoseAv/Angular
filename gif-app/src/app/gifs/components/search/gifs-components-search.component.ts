import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service'

@Component({
  selector: 'gifs-components-search',
  templateUrl: './gifs-components-search.component.html',
  styleUrl: './gifs-components-search.component.css'
})



export class SearchComponent {

  @ViewChild('inputSearch')
  public InputValue!: ElementRef<HTMLInputElement>


  constructor(private GifsService: GifsService) { }

  SearchInput() {
    const valueInput = this.InputValue.nativeElement.value
    this.GifsService.addTag(valueInput)
    this.InputValue.nativeElement.value = ''

  }

}
