import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CharacterActions} from './action-types';
import {concatMap, map, switchMap, tap} from 'rxjs';
import {CharacterHttpService} from './services/character-http.service';
import {CharacterListActions} from './character-list/action-types';
import {Character} from './character.model';


@Injectable()
export class CharacterEffects {

  createCharacter$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(CharacterActions.createCharacter),
        map(action => action.payload),
        concatMap((character) => this.characterHttpService.createCharacter(character)
          .pipe(
            map(() => CharacterListActions.addCharacter({payload: character}))
          )),
      )
    }
  );

  constructor(private actions$: Actions,
              private characterHttpService: CharacterHttpService) {
  }

}
