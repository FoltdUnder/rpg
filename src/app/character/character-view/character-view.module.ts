import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterViewRoutingModule } from './character-view-routing.module';
import {CharacterViewComponent} from './character-view.component';


@NgModule({
  declarations: [CharacterViewComponent],
  imports: [
    CommonModule,
    CharacterViewRoutingModule
  ],
  exports: [CharacterViewComponent]
})
export class CharacterViewModule { }
