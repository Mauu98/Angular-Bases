import {Component} from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <h1>{{title}}</h1>

    <h3>The base is <strong> {{base}} </strong></h3>

    <button (click)="plusNumber(base)"> + {{base}}</button>

    <span>{{counterNumber}}</span>

    <button (click)="minusNumber(base)"> - {{base}}</button>

    `
})


export class CounterComponent {

  title: string = 'Counter App';

  counterNumber: number = 40;

  base: number = 15;

  plusNumber(value: number){
    this.counterNumber += value;
  }

  minusNumber(value : number){
    this.counterNumber -= value;
  }

}