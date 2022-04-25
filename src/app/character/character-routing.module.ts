import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterBuilderComponent} from './character-builder/character-builder.component';

const routes: Routes = [
  {
    path: 'character-builder',
    component: CharacterBuilderComponent
  },
  {
    path: '**',
    redirectTo: 'character-builder'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
