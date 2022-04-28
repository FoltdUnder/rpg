import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {filter, finalize, first, Observable, of, tap} from 'rxjs';
import {CharacterListState} from './character-list.reducer';
import {areCharacterListLoaded} from './character-list.selectors';
import {CharacterListActions} from './action-types';

@Injectable({
  providedIn: 'root'
})
export class CharacterListResolver implements Resolve<boolean> {
  loading = false;

  constructor(private store: Store<CharacterListState>) {

  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> {
    return this.store
      .pipe(
        select(areCharacterListLoaded),
        tap(coursesLoaded => {
          if (!this.loading && !coursesLoaded) {
            this.loading = true;
            this.store.dispatch(CharacterListActions.loadCharacterList());
          }
        }),
        filter(characterLoaded => characterLoaded),
        first(),
        finalize(() => this.loading = false)
      );

  }
}
