import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import {  CharactersComponent } from './caracters/characters.component';
import { AddComponent } from './add/add.component';
import { DbzService } from './services/dbz.service';

@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ],
  providers: [ //Son todos los providers 
    DbzService
  ]
})
export class DbzModule { }
