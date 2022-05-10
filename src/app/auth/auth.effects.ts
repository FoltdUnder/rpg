import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthActions} from './action-types';
import {map, tap} from 'rxjs';
import {Router} from '@angular/router';
import {CharacterListActions} from '../character/character-list/action-types';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
      this.actions$
        .pipe(
          ofType(AuthActions.loginSuccess),
          tap(action => localStorage.setItem('user',
            JSON.stringify(action.user))
          )
        )
    ,
    {dispatch: false});

  logout$ = createEffect(() =>
      this.actions$
        .pipe(
          ofType(AuthActions.logout),
          tap(action => {
            localStorage.removeItem('user');
            this.router.navigateByUrl('/login');
          }),
          map(() => CharacterListActions.markCharacterListNeedLoad()),
        ),
    );

  constructor(private actions$: Actions,
              private router: Router) {

  }

}
