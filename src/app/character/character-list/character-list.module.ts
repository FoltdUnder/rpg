import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListRoutingModule } from './character-list-routing.module';
import {StoreModule} from '@ngrx/store';
import * as fromCharacterList from './character-list.reducer';
import {CharacterListComponent} from './character-list.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import {CharacterViewModule} from '../character-view/character-view.module';
import {TuiButtonModule, TuiLinkModule} from '@taiga-ui/core';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterCardComponent
  ],
    imports: [
        CommonModule,
        CharacterListRoutingModule,
        StoreModule.forFeature(fromCharacterList.characterListFeatureKey, fromCharacterList.characterListReducer),
        CharacterViewModule,
        TuiLinkModule,
        TuiButtonModule
    ]
})
export class CharacterListModule { }
