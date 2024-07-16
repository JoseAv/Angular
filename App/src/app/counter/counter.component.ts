import { Component } from '@angular/core';


@Component({
    selector: 'app-counter',
    template: `
    
<h2>Contador es  {{counter}} </h2>

<button (click)="fnCounter(1)">Incrementar</button>
<button (click)="Reset()">Reset</button>
<button (click)="fnCounter(-1)">Disminuir</button>
    `
})

export class Counter {
    constructor() { }
    title = 'My primera app de angular';
    public counter = 1

    fnCounter(value: number) {
        let counter = this.counter
        if (counter >= 5 && value === 1 || counter <= 0 && value === -1) return
        this.counter += value
    }



    Reset() {
        this.counter = 1
    }

}