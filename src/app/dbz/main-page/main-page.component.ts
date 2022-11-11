import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

  new : Character = {
    name : 'Mister Satan',
    power: 900
  }

  

  /*get characters(): Character[] {
    return this.dbzService.characters;
  }*/

  addNewCharacter(arg : Character){
    //this.characters.push(arg);
  }

  //Inyección de dependencias
  constructor(private dbzService : DbzService){}

}
