import {
  createReducer,
  on
} from '@ngrx/store';
import {Character} from '../character.model';
import {CharacterActions} from '../action-types';

export const characterFeatureKey = 'character';

export interface CharacterState extends Character{
}

export const initialCharacterState: CharacterState = {
  name: 'noname',
  view: {
    hat: 'none',
    eyeColor: 'none',
    body: 'none',
    legs: 'none',
    foot: 'none',
  }
}


export const characterReducer = createReducer(
  initialCharacterState,
  on(CharacterActions.createCharacter, (state, action) => action.payload),
  on(CharacterActions.updateCurrentCharacterStore, (state, action) => action.payload),
);
