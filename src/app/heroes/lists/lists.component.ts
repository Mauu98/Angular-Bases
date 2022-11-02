import { Component } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html'
})
export class ListsComponent  {

  heroes: string[] = ['Spiderman','Ironman', 'Batman','SpongeBob'];
  
  deletedHeroeList : string[] = [];

  deleteHeroe(){

    let newHeroeDelete = this.heroes.shift() || ''; //Remueve el primer elemento
    this.deletedHeroeList.push(newHeroeDelete);

  }

}
