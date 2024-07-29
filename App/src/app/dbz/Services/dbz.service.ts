import { Injectable } from '@angular/core';
import { typeCharacter, typeCharacterOutID } from '../Interfaces/types.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzServices {

  public character: typeCharacter[] = [{
    id: uuid(),
    name: 'krilin',
    power: 200
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9000
  }]


  addNewCaracter(newCharacter: typeCharacterOutID): void {
    const id = uuid()
    const addCharacter: typeCharacter = { id, ...newCharacter }
    this.character.push(addCharacter);
  }

  DeleteHero(id: string): void {
    // const newCharacter = this.character.map((e, i) => {
    //   return index !== i ? e : null
    // }).filter(item => item !== null)
    this.character = this.character.filter(e => e.id !== id)
  }


}
