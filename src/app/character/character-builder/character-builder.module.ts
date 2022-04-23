import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterBuilderComponent } from './character-builder.component';
import {RouterModule, Routes} from "@angular/router";
import {TuiBadgeModule, TuiCarouselModule, TuiIslandModule} from "@taiga-ui/kit";
import {TuiButtonModule} from "@taiga-ui/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ControlsModule} from "../../controls/controls.module";
import {StoreModule} from "@ngrx/store";
import * as fromCharacter from '../reducers';
import {characterReducer} from '../reducers';


const routes: Routes = [
  {
    path: '**',
    component: CharacterBuilderComponent
  }
];

@NgModule({
  declarations: [
    CharacterBuilderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    TuiCarouselModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiBadgeModule,
    ControlsModule,
    StoreModule.forFeature(fromCharacter.characterFeatureKey, fromCharacter.characterReducer)
  ]
})
export class CharacterBuilderModule { }
