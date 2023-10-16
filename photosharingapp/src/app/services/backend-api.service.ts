import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendApiService {
  apiUrl = 'http://localhost:3300/post';

  constructor(private http: HttpClient) {}

  uploadPost(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/createPost`, data);
  }

  getallPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/allPosts`);
  }

  getPosts(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  like(id: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/like/${id}`, {});
  }

}
