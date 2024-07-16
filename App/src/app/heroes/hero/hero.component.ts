import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name = 'Spiderman'
  public age: number = 0

  ChangeName(): void {
    this.name = 'Peter'
  }

  ChangeAge(): void {
    this.age = 25
  }


  get ChangeCapitalize(): string {
    return this.name.toUpperCase()
  }

  getHeroDescripcion(): string {
    return `${this.name.toLowerCase()} - ${this.age}`
  }

}
