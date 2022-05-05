import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {CharacterListActions} from './app/character/character-list/action-types';
import {CharacterBuilderActions} from './app/character/character-builder/action-types';
import {Store} from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class InitialResolver implements Resolve<boolean> {

  constructor(private store: Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.store.dispatch(CharacterListActions.loadCharacterList());
    this.store.dispatch(CharacterBuilderActions.loadCharacterBuilder());
    return of(true);
  }
}
