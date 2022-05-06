import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import {StoreModule} from '@ngrx/store';
import * as fromCharacter from './reducers';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ControlsModule} from '../controls/controls.module';
import {CharacterBuilderComponent} from './character-builder/character-builder.component';
import {TuiInputModule} from '@taiga-ui/kit';
import {CharacterViewModule} from './character-view/character-view.module';
import {CharacterListModule} from './character-list/character-list.module';
import {EffectsModule} from '@ngrx/effects';
import {CharacterEffects} from './character.effects';


@NgModule({
  declarations: [
    CharacterBuilderComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ControlsModule,
    StoreModule.forFeature(fromCharacter.characterFeatureKey, fromCharacter.characterReducer),
    TuiInputModule,
    CharacterViewModule,
    CharacterListModule,
    EffectsModule.forFeature([CharacterEffects]),

  ]
})
export class CharacterModule { }
