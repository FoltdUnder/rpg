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
  hat: 'none',
  eyeColor: 'none',
  body: 'none',
  legs: 'none',
  foot: 'none',
}


export const characterReducer = createReducer(
  initialCharacterState,
  on(CharacterActions.LocalSaveCharacter, (state, action) => ({
    name: action.name,
    hat: action.hat,
    eyeColor: action.eyeColor,
    body: action.body,
    legs: action.legs,
    foot: action.foot
  })),
);
