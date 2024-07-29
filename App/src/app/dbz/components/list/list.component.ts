import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { typeCharacter } from '../../Interfaces/types.interface';
import { v4 } from 'uuid';

@Component({
    selector: 'app-dbz-list',
    templateUrl: `./list.component.html`,
    styleUrl: './list.component.css',

})
export class ListDbzComponent {

    @Input()
    public characterList: typeCharacter[] = [{
        id: v4(),
        name: 'Trunks',
        power: 4000
    }]

    @Output()
    public onDelete: EventEmitter<string> = new EventEmitter()


    onDeleteHero(id: string) {
        const newId = id.toString()
        if (typeof id !== 'string') return
        this.onDelete.emit(newId)
    }



}
