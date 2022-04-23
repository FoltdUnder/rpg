import {Character} from "./character.model";
import {createReducer, on} from "@ngrx/store";
import {createEntityAdapter} from "@ngrx/entity";
import {CharacterActions} from "./action-types";


// export const adapter = createEntityAdapter<Character>();

export const initialCharacterState = {
  huy: 'yuh'
};

export const charactersReducer = createReducer(
  initialCharacterState,
  on(CharacterActions.LocalSaveCharacter, (state, character ) => ({ ...state, character}))
);
