import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { typeCharacter } from '../../Interfaces/types.interface';

@Component({
    selector: 'app-dbz-list',
    templateUrl: `./list.component.html`,
    styleUrl: './list.component.css',

})
export class ListDbzComponent {

    @Input()
    public characterList: typeCharacter[] = [{
        name: 'Trunks',
        power: 4000
    }]

    @Output()
    public onDelete: EventEmitter<number> = new EventEmitter()


    onDeleteHero(index: number) {
        if (typeof index !== 'number') return
        this.onDelete.emit(index)
    }



}
