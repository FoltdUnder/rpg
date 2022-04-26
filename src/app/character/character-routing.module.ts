import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterBuilderComponent} from './character-builder/character-builder.component';
import {CharacterListComponent} from './character-list/character-list.component';

const routes: Routes = [
  {
    path: 'builder',
    component: CharacterBuilderComponent
  },
  {
    path: 'list',
    component: CharacterListComponent
  },

  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
