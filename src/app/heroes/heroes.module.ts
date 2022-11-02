import { CommonModule } from "@angular/common";
import { NgModule} from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListsComponent } from './lists/lists.component';

@NgModule({
    declarations: [ //Las declaraciones especifican que cosas se estan usando
        HeroeComponent,
        ListsComponent
    ],
    exports:[ //Que cosas quiero hacer públicas
        ListsComponent
    ],
    imports: [ //Todo lo que quiero importar
        CommonModule
    ]
})
export class HeroesModule {



}