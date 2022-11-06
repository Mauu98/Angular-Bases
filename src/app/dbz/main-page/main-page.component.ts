import { Component, OnInit } from '@angular/core';

interface Caracter {
  name: string,
  power: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  new: Caracter = {
    name: 'Freezer',
    power: 10000
  }

  constructor() { }

  ngOnInit(): void {
  }

  addCaracter(){
    console.log(this.new);
  }

}
