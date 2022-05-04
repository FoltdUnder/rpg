import { createFeatureSelector, createSelector } from '@ngrx/store';
import {CharacterListState} from './character-list.reducer';
import * as fromCharacterList from './character-list.reducer';


export const selectCharacterListState =
  createFeatureSelector<CharacterListState>('characterList');

export const selectCharacterList = createSelector(
  selectCharacterListState,
  fromCharacterList.selectAll
)

export const areCharacterListLoaded = createSelector(
  selectCharacterListState,
  state => state.areCharacterListLoaded
);

