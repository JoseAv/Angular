import { Component } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'My primera app de angular';
  counter = 1

  fnCounter(value: number) {
    let counter = this.counter
    if (counter >= 5 && value === 1 || counter <= 0 && value === -1) return
    this.counter += value
  }



  Reset() {
    this.counter = 1
  }
}
