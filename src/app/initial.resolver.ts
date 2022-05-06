import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {filter, finalize, first, Observable, of, tap} from 'rxjs';
import {CharacterListActions} from './character/character-list/action-types';
import {CharacterBuilderActions} from './character/character-builder/action-types';
import {select, Store} from '@ngrx/store';
import {selectInitialDataLoaded} from './app.selectors';

@Injectable({
  providedIn: 'root'
})
export class InitialResolver implements Resolve<boolean> {
  loading = false;

  constructor(private store: Store) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.store
      .pipe(
        select(selectInitialDataLoaded),
        tap(dataLoaded => {
          if (!this.loading && !dataLoaded) {
            this.loading = true;
            this.store.dispatch(CharacterListActions.loadCharacterList());
            this.store.dispatch(CharacterBuilderActions.loadCharacterBuilder());
          }
        }),
        filter(characterLoaded => characterLoaded),
        first(),
        finalize(() => {
          this.loading = false;
        })
      );
  }
}
