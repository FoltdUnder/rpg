import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {isLoggedIn, isLoggedOut, selectAuthState} from '../../auth/auth.selectors';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isLoggedOut$ = new Observable<boolean>()
  isLoggedIn$ = new Observable<boolean>()
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isLoggedOut$ = this.store
      .pipe(
        select(isLoggedOut)
      );
    this.isLoggedIn$ = this.store
      .pipe(
        select(isLoggedIn)
      );
  }

}
