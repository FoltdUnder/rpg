import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {isLoggedIn} from './auth/auth.selectors';
import {AuthActions} from './auth/action-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isLoggedIn$ = new Observable<boolean>();
  title = 'rpg';

  constructor(private store: Store) {
  }
  ngOnInit(): void {
    const userProfile = localStorage.getItem("user");

    if (userProfile) {
      this.store.dispatch(AuthActions.loginSuccess({user: JSON.parse(userProfile)}));
    }

    this.isLoggedIn$ = this.store
      .pipe(
        select(isLoggedIn)
      );
  }
}
