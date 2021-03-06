import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {TuiRootModule, TuiDialogModule, TUI_SANITIZER, TuiSvgModule} from '@taiga-ui/core';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from "@ngrx/store";
import {reducers, metaReducers} from "./reducers";
import {RouterModule, Routes} from "@angular/router";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { environment } from '../environments/environment';
import { MenuComponent } from './components/menu/menu.component';
import {AuthModule} from './auth/auth.module';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './auth/auth.guard';
import {EffectsModule} from '@ngrx/effects';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import {CharacterListEffects} from './character/character-list/character-list.effects';
import {CharacterBuilderEffects} from './character/character-builder/character-builder.effects';
import {InitialResolver} from './initial.resolver';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'character',
    loadChildren: () => import('./character/character.module').then(m => m.CharacterModule),
    canActivate: [AuthGuard],
    resolve: [InitialResolver]
  },
  {
    path: '**',
    redirectTo: '/character'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true
      }
    }),
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([CharacterListEffects, CharacterBuilderEffects]),
    TuiSvgModule,
    AuthModule
  ],
  providers: [
    {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
