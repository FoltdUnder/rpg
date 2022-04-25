import { Action, createReducer, on } from '@ngrx/store';
import {User} from '../model/user.model';
import {AuthActions} from '../action-types';


export const authFeatureKey = 'auth';

export interface AuthState {
  user: User;
}

export const initialState: AuthState = {
  user: {
    id: '',
    login: ''
  }
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, action) => ({user: action.user}))
);
