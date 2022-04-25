import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule, TuiInputPasswordModule} from '@taiga-ui/kit';
import {TuiButtonModule} from '@taiga-ui/core';
import {StoreModule} from '@ngrx/store';
import {authReducer} from './reducers/auth.reducer';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    StoreModule.forFeature('auth', authReducer),
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
