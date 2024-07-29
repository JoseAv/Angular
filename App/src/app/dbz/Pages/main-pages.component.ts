

import { Component } from '@angular/core';
import { typeCharacter } from '../Interfaces/types.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-pages.component.html'
})

export class dbzComponent {

    public character: typeCharacter[] = [{
        name: 'krilin',
        power: 200
    },
    {
        name: 'Goku',
        power: 9000
    }]


    addNewCaracter(newCharacter: typeCharacter): void {
        console.log(newCharacter)
        console.log(this.character)
        this.character.push({ ...newCharacter });
    }

    DeleteHero(index: number): void {
        const newCharacter = this.character.map((e, i) => {
            return index !== i ? e : null
        }).filter(item => item !== null)
        this.character = newCharacter
    }


}