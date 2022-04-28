import { Action, createReducer, on } from '@ngrx/store';
import {CharacterListActions} from './action-types';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {Character} from '../character.model';


export const characterListFeatureKey = 'character-list';

export interface CharacterListState extends EntityState<Character>{
  araCharacterListLoaded: boolean;
}

export const adapter = createEntityAdapter<Character>();

export const initialCharacterListState = adapter.getInitialState({
  araCharacterListLoaded: false
});

export const characterListReducer = createReducer(
  initialCharacterListState,
  on(CharacterListActions.characterListLoaded, (state, action) => {
    return adapter.addMany(action.characterList, {...state, araCharacterListLoaded: true})
  }
  ),
);

export const {selectAll} = adapter.getSelectors();
