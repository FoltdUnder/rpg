import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterBuilderComponent} from './character-builder/character-builder.component';
import {CharacterListComponent} from './character-list/character-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: CharacterListComponent,
  },
  {
    path: 'create',
    component: CharacterBuilderComponent
  },
  {
    path: ':id',
    component: CharacterBuilderComponent
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
