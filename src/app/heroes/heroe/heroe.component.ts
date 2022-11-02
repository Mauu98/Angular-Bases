import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nameHeroe : string = 'IronMan';
    ageHeroe : number = 40;

    get capitalizateName(): string {
        return this.nameHeroe.toUpperCase();
    }

    getHeroeName(): string {
        return `${this.nameHeroe} - ${this.ageHeroe}`;
    }

    changeName(): void{
        this.nameHeroe = 'Batman';
    }

    changeAge(): void{
        this.ageHeroe = 100;
    }

}