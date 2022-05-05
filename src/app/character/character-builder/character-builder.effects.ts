import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CharacterListActions} from '../character-list/action-types';
import {concatMap, map} from 'rxjs';
import {CharacterActions} from '../action-types';
import {CharacterBuilderActions} from './action-types';
import {CharacterHttpService} from '../services/character-http.service';



@Injectable()
export class CharacterBuilderEffects {

  loadCharacterBuilder$ = createEffect(
    () => this.actions$.pipe(
      ofType(CharacterBuilderActions.loadCharacterBuilder),
      concatMap(() => this.characterHttpService.getCharacterBuilder()),
      map(characterBuilder => CharacterBuilderActions.loadCharacterBuilderSuccess({payload: characterBuilder}))
    )
  )

  constructor(private actions$: Actions,
              private characterHttpService: CharacterHttpService) {}

}
