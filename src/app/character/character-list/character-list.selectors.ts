import { createFeatureSelector, createSelector } from '@ngrx/store';
import {CharacterListState, selectAll} from './character-list.reducer';
import * as fromCharacterList from './character-list.reducer';


export const selectCharacterListState =
  createFeatureSelector<CharacterListState>('characterList');

export const selectCharacterList = createSelector(
  selectCharacterListState,
  fromCharacterList.selectAll,
)

export const areCharacterListLoaded = createSelector(
  selectCharacterListState,
  state => state.areCharacterListLoaded
);

export const selectEntities = createSelector(
  selectCharacterListState,
  fromCharacterList.selectEntities,
);

export const selectCharacterById = (id: number) => createSelector(
  selectEntities,
  (entities) => entities[id]
)

export const selectTotalCharacters = createSelector(
  selectCharacterListState,
  fromCharacterList.selectTotal
)
