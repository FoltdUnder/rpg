import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterListComponent} from './character-list/character-list.component';
import {CreateCharacterComponent} from './character-builder/create-character/create-character.component';
import {UpdateCharacterComponent} from './character-builder/update-character/update-character.component';

const routes: Routes = [
  {
    path: 'list',
    component: CharacterListComponent,
  },
  {
    path: 'create',
    component: CreateCharacterComponent
  },
  {
    path: ':id',
    component: UpdateCharacterComponent
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
