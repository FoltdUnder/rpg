import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CharacterHttpService} from '../services/character-http.service';
import {CharacterListActions} from './action-types';
import {concatMap, map} from 'rxjs';


@Injectable()
export class CharacterListEffects {

  loadCharacterList$ = createEffect(
    () => this.actions$.pipe(
      ofType(CharacterListActions.loadCharacterList),
      concatMap(action => this.characterHttpService.getCharacterList()),
      map(characterList => {
        return CharacterListActions.loadCharacterListSuccess({characterList})
      })
    )
  )

  deleteCharacter$ = createEffect(
    () => this.actions$.pipe(
      ofType(CharacterListActions.deleteCharacter),
      concatMap(action => this.characterHttpService.deleteCharacter(action.id))
    ), {dispatch: false}
  )

  constructor(private actions$: Actions,
              private characterHttpService: CharacterHttpService) {
  }
}
