import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  apiUrl = 'http://localhost:3300/images/';

  constructor(private http: HttpClient) {}

  uploadPost(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/createPost`,data);
  }

  getallPosts(): Observable <any> {
    return this.http.get(`${this.apiUrl}/allPosts`);
  }

  getPosts(id: number): Observable<any> {
    return this.http.get(`'http://localhost:3300/images/'${id}`);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`'http://localhost:3300/images/'${id}`);

  }

}
