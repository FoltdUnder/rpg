import {createAction, props} from "@ngrx/store";
import {Character} from "./character.model";


export const updateCurrentCharacterStore = createAction(
  '[Character builder page] Update Current Character',
  props<{payload: Character}>()
);

export const createCharacter = createAction(
  '[Character builder page] Create Character',
  props<{payload: Character}>()
);

export const updateCharacterList = createAction(
  '[Character builder page] Update Character List'
);
