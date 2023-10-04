import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


// const base_url = 'https://i-sakhono-backend.vercel.app/api/'
// const user_api = "https://i-sakhono-backend.vercel.app/api/users/"
const base_url = "http://localhost:3300"
const token = window.sessionStorage.getItem("token")
const httpOptions = {
  headers: new HttpHeaders ({
    "x-access-token": `${token}`
  })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  registerUser(username: string, email: string, password: string){
    return this.http.post(base_url + "auth/signup", {username,email,password})
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      base_url + 'auth/signin',
      {
        username,
        password,
      }
    );
  }
}