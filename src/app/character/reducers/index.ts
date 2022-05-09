import {
  createReducer,
  on
} from '@ngrx/store';
import {Character, CharacterBuilder} from '../character.model';
import {CharacterActions} from '../action-types';
import {CharacterBuilderActions} from '../character-builder/action-types';

export const characterFeatureKey = 'character';

export interface CharacterState {
  characterBuilder: CharacterBuilder
  currentCharacter: Character,
  areCharacterBuilderLoaded: boolean;
}

export const initialCharacterState: CharacterState = {
  currentCharacter: {
    id: 0,
    name: 'noname',
    view: {
      hat: 'none',
      eyeColor: 'none',
      body: 'none',
      legs: 'none',
      foot: 'none',
    },
  },

  characterBuilder: {
    hats: [],
    eyeColors: [],
    bodies: [],
    legs: [],
    foots: [],
  },
  areCharacterBuilderLoaded: false
}


export const characterReducer = createReducer(
  initialCharacterState,
  on(CharacterActions.createCharacter, (state, action) => ({...state, currentCharacter: action.payload})),
  on(CharacterActions.updateCurrentCharacterStore, (state, action) => ({...state, currentCharacter: action.payload})),
  on(CharacterBuilderActions.loadCharacterBuilderSuccess, (state, action) => ({
    ...state,
    characterBuilder: {...action.payload},
    areCharacterBuilderLoaded: true
  })),
);
