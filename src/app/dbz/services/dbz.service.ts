import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interface";

@Injectable() //Es el decorador que tienen los servicios
export class DbzService {

    constructor() {
        console.log("Servicio inicializado");
    }

    private _characters: Character[] = [
        {
            name: 'Goku',
            power: 15000
        },
        {
            name: 'Gohan',
            power: 3000
        }
    ];

    get characters(): Character[] {
        return [...this._characters]; //Spread
    }

    addCharacters(character : Character){
        this._characters.push(character);
    }



}