import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


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
    private http: HttpClient,
    private router: Router
  ) { }

  

  register(username: any, email: any, password: any, password2: any):
  Observable<any> {
    return this.http.post( base_url +'register', {
      username,
      email,
      password,
      password2
    }, httpOptions);
  }

login(username: any, password: any):
Observable<any> {
  return this.http.post(base_url + '/login', {
    username,
    password
  },httpOptions);

}

}

// logout(){
//   sessionStorage.clear()
// }
// getOne(id: any){
//   return this.http.get(user_api+id, httpOptions)

// }

// update(data: any, id: any){
//   return this.http.put(user_api+id, data, httpOptions)
// }
// }







