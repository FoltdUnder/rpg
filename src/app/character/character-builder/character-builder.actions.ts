import { createAction, props } from '@ngrx/store';
import {CharacterBuilder} from '../character.model';

export const loadCharacterBuilder = createAction(
  '[CharacterBuilder Page] Load CharacterBuilder'
);

export const loadCharacterBuilderSuccess = createAction(
  '[CharacterBuilder] Load CharacterBuilders Success',
  props<{ payload: CharacterBuilder }>()
);

export const loadCharacterBuildersFailure = createAction(
  '[CharacterBuilder] Load CharacterBuilders Failure',
  props<{ error: any }>()
);
