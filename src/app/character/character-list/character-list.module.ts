import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListRoutingModule } from './character-list-routing.module';
import {StoreModule} from '@ngrx/store';
import * as fromCharacter from './character-list.reducer';
import {EffectsModule} from '@ngrx/effects';
import {CharacterListEffects} from './character-list.effects';
import {CharacterListComponent} from './character-list.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import {CharacterViewModule} from '../character-view/character-view.module';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    CharacterListRoutingModule,
    StoreModule.forFeature(fromCharacter.characterListFeatureKey, fromCharacter.characterListReducer),
    EffectsModule.forFeature([CharacterListEffects]),
    CharacterViewModule
  ]
})
export class CharacterListModule { }
