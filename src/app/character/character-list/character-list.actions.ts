import { createAction, props } from '@ngrx/store';
import {Character} from '../character.model';

export const loadCharacterList = createAction(
  '[Initial Resolver] Load CharacterList'
);

export const loadCharacterListSuccess = createAction(
  "[Load Character List Effect] All Courses Loaded",
  props<{characterList: Character[]}>()
);

export const addCharacter = createAction(
  '[Character Create Page] add character',
  props<{payload: Character}>()
);



