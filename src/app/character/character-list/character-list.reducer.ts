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
  on(CharacterListActions.characterListLoaded, (state, action) => {
    return characterEntityAdapter.addMany(action.characterList, {...state, areCharacterListLoaded: true})
  }),
  on(CharacterListActions.addNewCharacter, (state, action) => {
    return characterEntityAdapter.addOne(action.payload, state)
  }),
);

export const {selectAll, selectIds, selectEntities, selectTotal} = characterEntityAdapter.getSelectors();
