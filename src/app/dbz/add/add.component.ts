import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  constructor(private dbzService : DbzService){}

  @Input() new: Character = {
    name: '',
    power: 0
  }

  //@Output() onNewCharacter: EventEmitter<Character> = new EventEmitter(); //Se quiere emitir un evento de Tipo Personaje al componente padre

  addCaracter() {

    if (this.new.name.trim == null) {
      return;
    }

    //this.onNewCharacter.emit(this.new);

    this.dbzService.addCharacters(this.new);

    this.new = {
      name: '',
      power: 0
    }
  }
}
