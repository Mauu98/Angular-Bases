import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counters/counter.component';
import { CounterModule } from './counters/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({ //Decorador
  declarations: [
    AppComponent
  ],
  imports: [ //Se colocan otros módulos
    BrowserModule,
    HeroesModule,
    CounterModule,
    DbzModule
  ],
  providers: [], //Servicios
  bootstrap: [AppComponent] //Componente principal
})
export class AppModule { }
