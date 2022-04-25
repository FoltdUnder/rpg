import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {isLoggedIn} from '../../auth/auth.selectors';
import {AuthActions} from '../../auth/action-types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  isLoggedIn$ = new Observable<boolean>();
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store
      .pipe(
        select(isLoggedIn)
      );
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
