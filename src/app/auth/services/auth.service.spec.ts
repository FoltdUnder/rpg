import {TestBed} from '@angular/core/testing';

import {AuthService} from './auth.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {login} from '../auth.actions';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
  const mockUser = {
    login: 'login',
    password: 'pass',
    id: '666'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login', () => {
    service.login(mockUser.login, mockUser.password).subscribe((res) => {
      expect(res).toEqual({login: mockUser.login, id: mockUser.id});
    });

    const request = httpMock.expectOne('api/login');
    expect(request.request.body).toEqual({
      login: mockUser.login,
      password: mockUser.password
    });
    expect(request.request.method).toBe('POST');
    request.flush({login: mockUser.login, id: mockUser.id});
  });
});
