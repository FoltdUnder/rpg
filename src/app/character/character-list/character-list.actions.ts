import { createAction, props } from '@ngrx/store';
import {Character} from '../character.model';

export const loadCharacterList = createAction(
  '[CharacterList Page] Load CharacterList'
);

export const characterListLoaded = createAction(
  "[Load Character List Effect] All Courses Loaded",
  props<{characterList: Character[]}>()
);



