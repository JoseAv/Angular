import { Component, EventEmitter, Output } from '@angular/core';
import { typeCharacter } from '../../../Interfaces/types.interface';


@Component({
    selector: 'app-dbz-char',
    templateUrl: './char.component.html',
    styleUrl: './char.component.css',
})


export class CharComponent {


    @Output()
    public onNewCharacter: EventEmitter<typeCharacter> = new EventEmitter();


    public newCharacter: typeCharacter = {
        name: '',
        power: 0
    }

    emitCharacter() {
        if (this.newCharacter.name.length === 0) return

        this.onNewCharacter.emit(this.newCharacter)



    }


}
