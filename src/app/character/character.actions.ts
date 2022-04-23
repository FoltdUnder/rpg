import {createAction, props} from "@ngrx/store";
import {Character} from "./character.model";


export const LocalSaveCharacter = createAction(
  '[Character builder page] Local Save Character',
  props<Character>()
);
