import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-caracters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {

 //@Input() characters : Character[] = []; //Estos personajes, van a venir del componente padre (MainComponent)

 get characters(){
  return this.dbzService.characters;
 }

 constructor(private dbzService : DbzService){}

}
