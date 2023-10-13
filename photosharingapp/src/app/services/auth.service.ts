import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SnackbarService } from '../snackbar.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _snackBarService: SnackbarService
  ) {}

  private token?: String;
  private userId?: String;
  private authenticatedUser = false;
  private logoutTimer: any;
  private username: any;
  private authenticatedSub = new Subject<boolean>();

  getIsAuthenticated() {
    return this.authenticatedUser;
  }

  getUserId() {
    return this.userId;
  }

  getToken() {
    return localStorage.getItem("token")
  }

  getUsername() {
    return localStorage.getItem('username')
  }

  getAuthenticatedSub() {
    return this.authenticatedSub.asObservable();
  }

  register(data: any): Observable<any> {
    return this._http.post<any>('http://127.0.0.1:3300/users/register', data);
  }

  login(data: any): void {
    this._http.post<any>('http://127.0.0.1:3300/users/login', data).subscribe({
      next: (res: any) => {
        this.token = res.token;
        this.username = res.username;
        this.userId = res.userId;

        if (this.token) {
          this.authenticatedUser = true;
          this._router.navigate(['/', 'view']);
          this.logoutTimer = setTimeout(() => {
            this.logout();
          }, res.expiresIn * 3600);
          const now = new Date();
          const expiresDate = new Date(now.getTime() + res.expiresIn * 1000);
          this.storeLoginDetails(this.token, expiresDate, this.username);
          this._snackBarService.openSnackBar(`Hello, ${this.username}`,'Done');
        }
      },
      error: () => {
        this._snackBarService.openSnackBar(
          'Incorrect username or password',
          'Failed'
        );
      },
    });
  }

  logout() {
    this.token = '';
    this.authenticatedUser = false;
    this.authenticatedSub.next(false);
    this._router.navigate(['/login']);
    clearTimeout(this.logoutTimer);
    this.clearLoginDetails();
  }

  storeLoginDetails(token: any, expirationDate: Date, username: any) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiresIn', expirationDate.toISOString());
    localStorage.setItem('username', username)
  }

  clearLoginDetails() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('username');
  }

  getLocalStorageData() {
    const token = localStorage.getItem('token');
    const expiresIn = localStorage.getItem('expiresIn');
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    if (!token || !expiresIn || !username) {
      return;
    }
    return {
      token: token,
      expiresIn: new Date(expiresIn),
    };
  }

  authenticateFromLocalStorage() {
    const localStorageData = this.getLocalStorageData();
    if (localStorageData) {
      const now = new Date();
      const expiresIn = localStorageData.expiresIn.getTime() - now.getTime();

      if (expiresIn > 0) {
        this.token = localStorageData.token;
        this.authenticatedUser = true;
        this.authenticatedSub.next(true);
        this.logoutTimer.setTimeout(expiresIn / 1000);
      }
    }
  }
}
