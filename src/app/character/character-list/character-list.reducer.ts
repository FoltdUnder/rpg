import { Action, createReducer, on } from '@ngrx/store';
import {CharacterListActions} from './action-types';
import {createEntityAdapter, EntityState} from '@ngrx/entity';
import {Character} from '../character.model';


export const characterListFeatureKey = 'characterList';

export interface CharacterListState extends EntityState<Character>{
  areCharacterListLoaded: boolean;
}

export const adapter = createEntityAdapter<Character>();

export const initialCharacterListState = adapter.getInitialState({
  areCharacterListLoaded: false
});

export const characterListReducer = createReducer(
  initialCharacterListState,
  on(CharacterListActions.characterListLoaded, (state, action) => {
    return adapter.addMany(action.characterList, {...state, areCharacterListLoaded: true})
  }),
  on(CharacterListActions.addNewCharacter, (state, action) => {
    return adapter.addOne(action.payload, state)
  })
);

export const {selectAll} = adapter.getSelectors();
