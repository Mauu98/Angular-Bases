import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
