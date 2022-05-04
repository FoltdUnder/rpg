import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterBuilderComponent} from './character-builder/character-builder.component';

const routes: Routes = [
  {
    path: 'builder',
    component: CharacterBuilderComponent
  },
  {
    path: 'list',
    loadChildren: () => import('./character-list/character-list.module').then(m => m.CharacterListModule),
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
