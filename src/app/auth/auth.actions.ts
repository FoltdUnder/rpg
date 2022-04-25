import { createAction, props } from '@ngrx/store';
import {User} from './model/user.model';

export const login = createAction(
  '[Login Page] User Login',
);

export const loginSuccess = createAction(
  '[Login Page] User Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Login Page] User Login Failure',
  props<{ error: any }>()
);
