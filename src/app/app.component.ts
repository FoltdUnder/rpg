import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {isLoggedIn} from './auth/auth.selectors';
import {AuthActions} from './auth/action-types';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isLoggedIn$ = new Observable<boolean>();
  title = 'rpg';
  loading = false;

  constructor(private store: Store,
              private router: Router) {
    this.router.events.subscribe((event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnInit(): void {
    const userProfile = localStorage.getItem("user");

    if (userProfile) {
      this.store.dispatch(AuthActions.loginSuccess({user: JSON.parse(userProfile)}));
    }

    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));
  }
}
