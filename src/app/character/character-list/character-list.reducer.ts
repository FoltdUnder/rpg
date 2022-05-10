import { Action, createReducer, on } from '@ngrx/store';
import {CharacterListActions} from './action-types';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {Character} from '../character.model';


export const characterListFeatureKey = 'characterList';

export interface CharacterListState extends EntityState<Character>{
  areCharacterListLoaded: boolean;
}

export const characterEntityAdapter = createEntityAdapter<Character>();

export const initialCharacterListState = characterEntityAdapter.getInitialState({
  areCharacterListLoaded: false
});

export const characterListReducer = createReducer(
  initialCharacterListState,
  on(CharacterListActions.loadCharacterListSuccess, (state, action) => {
    return characterEntityAdapter.addMany(action.characterList, {...state, areCharacterListLoaded: true})
  }),
  on(CharacterListActions.addCharacter, (state, action) => {
    return characterEntityAdapter.addOne(action.payload, state)
  }),
  on(CharacterListActions.deleteCharacter, (state, action) => {
    return characterEntityAdapter.removeOne(action.id, state)
  }),
  on(CharacterListActions.updateCharacter, (state, action) => {
    return characterEntityAdapter.setOne(action.payload, state)
  }),
);

export const {selectAll, selectIds, selectEntities, selectTotal} = characterEntityAdapter.getSelectors();
