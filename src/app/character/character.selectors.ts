import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CharacterState} from './reducers';





export const selectCharacterState =
  createFeatureSelector<CharacterState>('character');



export const selectCharacterView = createSelector(
  selectCharacterState,
  state => state.view
)

// export const isCharacterBuilderLoaded = createSelector(
//   state => state['character']
// );
