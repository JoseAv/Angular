import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public Heroes: string[] = ['Spiderman', 'Ironman', 'Superman']
  public LastHero?: string

  DeleteHero() {

    this.LastHero = this.Heroes.pop()

    console.log(this.Heroes)
  }

}


