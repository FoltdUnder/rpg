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

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'character',
    loadChildren: () => import('./character/character.module').then(m => m.CharacterModule),
    canActivate: [AuthGuard]
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
    TuiSvgModule,
    AuthModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
