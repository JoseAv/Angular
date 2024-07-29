import { Component, EventEmitter, Output } from '@angular/core';
import { typeCharacterOutID } from '../../../Interfaces/types.interface';


@Component({
    selector: 'app-dbz-char',
    templateUrl: './char.component.html',
    styleUrl: './char.component.css',
})


export class CharComponent {


    @Output()
    public onNewCharacter: EventEmitter<typeCharacterOutID> = new EventEmitter();


    public newCharacter: typeCharacterOutID = {
        name: '',
        power: 0
    }

    emitCharacter() {
        if (this.newCharacter.name.length === 0) return

        this.onNewCharacter.emit(this.newCharacter)



    }


}
