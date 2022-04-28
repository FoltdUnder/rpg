import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AuthService} from '../services/auth.service';
import {tap} from 'rxjs';
import {AuthActions} from '../action-types';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private store: Store,
              private router: Router,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      login: ['tempo', [Validators.required]],
      password: ['pass', [Validators.required]]
    });
  }

  onSubmit() {
    const {login, password} = this.form.value;
    this.authService.login(login, password).pipe(
      tap(user => {
        this.store.dispatch(AuthActions.login());
        this.router.navigateByUrl('/character');
      })
    ).subscribe({
        next: (user) => this.store.dispatch(AuthActions.loginSuccess({user})),
        error: (error) => this.store.dispatch(AuthActions.loginFailure(error))
      }
    );
  }
}
