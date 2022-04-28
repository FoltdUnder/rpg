import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharacterListComponent} from './character-list.component';
import {CharacterListResolver} from './character-list.resolver';

const routes: Routes = [
  {
    path: '',
    component: CharacterListComponent,
    resolve: [CharacterListResolver]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterListRoutingModule { }
