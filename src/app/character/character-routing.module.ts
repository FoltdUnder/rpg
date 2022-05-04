import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterBuilderComponent} from './character-builder/character-builder.component';
import {CharacterListModule} from './character-list/character-list.module';
import {CharacterListComponent} from './character-list/character-list.component';
import {CharacterListResolver} from './character-list/character-list.resolver';

const routes: Routes = [
  {
    path: 'list',
    component: CharacterListComponent,
    resolve: [CharacterListResolver]
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
    CharacterListModule
  ],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
