

import { Component } from '@angular/core';
import { DbzServices } from '../Services/dbz.service';
import { typeCharacter, typeCharacterOutID } from '../Interfaces/types.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-pages.component.html'
})

export class dbzComponent {

    constructor(private DbzServices: DbzServices) { }

    get character(): typeCharacter[] {
        return this.DbzServices.character
    }

    DeleteHero(id: string) {
        this.DbzServices.DeleteHero(id)
    }

    NewCaracter(newCharacter: typeCharacterOutID) {
        this.DbzServices.addNewCaracter(newCharacter)
    }

}