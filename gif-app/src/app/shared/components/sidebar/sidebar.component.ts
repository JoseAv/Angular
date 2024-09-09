import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  public historyTag: string[] = []
  constructor(private gifsService: GifsService) { }


  getHistory() {
    return this.gifsService.getHistory()
  }

  Refres(btn: string) {
    this.gifsService.addTag(btn)
  }
}
