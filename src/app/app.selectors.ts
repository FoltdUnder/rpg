import { createSelector } from '@ngrx/store';
import {selectCharacterListState} from './character/character-list/character-list.selectors';
import {selectCharacterState} from './character/character.selectors';

export const selectInitialDataLoaded = createSelector(
  selectCharacterState,
  selectCharacterListState,
  (characterState, characterListState) => {
    return characterState.areCharacterBuilderLoaded && characterListState.areCharacterListLoaded
  }
)
