import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import {StoreModule} from '@ngrx/store';
import * as fromCharacter from './reducers';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ControlsModule} from '../controls/controls.module';
import {CharacterBuilderComponent} from './character-builder/character-builder.component';
import {TuiInputModule} from '@taiga-ui/kit';
import { CharacterViewComponent } from './character-view/character-view.component';


@NgModule({
  declarations: [
    CharacterBuilderComponent,
    CharacterViewComponent
  ],
    imports: [
        CommonModule,
        CharacterRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        ControlsModule,
        StoreModule.forFeature(fromCharacter.characterFeatureKey, fromCharacter.characterReducer),
        TuiInputModule,


    ]
})
export class CharacterModule { }
