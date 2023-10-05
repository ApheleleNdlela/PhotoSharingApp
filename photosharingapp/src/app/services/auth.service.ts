import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const base_url = "http://localhost:3300/users"
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


  // data: any {
  //   username: string,
  //   email: any
  // }
  // register(username: any, email: any, password: any, password2: any):
  // Observable<any> {
  //   return this.http.post( base_url +'/signup', {
  //     username,
  //     email,
  //     password,
  //     password2
  //   }, httpOptions);
  // }

 register(username: any, email: any, password: any, ): Observable<any> {
    return this.http.post<any>( base_url + '/register', {
      username,
      email,
      password,
    
    },httpOptions);
  } 

login(username: any, password: any):
Observable<any> {
  return this.http.post(base_url + '/login', {
    username,
    password
  },httpOptions);

}

}







