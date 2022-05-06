import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CharacterState} from './reducers';





export const selectCharacterState =
  createFeatureSelector<CharacterState>('character');



export const selectCharacterView = createSelector(
  selectCharacterState,
  state => state.currentCharacter.view
)

export const areCharacterBuilderLoaded = createSelector(
  selectCharacterState,
  state => state.areCharacterBuilderLoaded
);

export const selectCharacterBuilder = createSelector(
  selectCharacterState,
  state => state.characterBuilder
);
