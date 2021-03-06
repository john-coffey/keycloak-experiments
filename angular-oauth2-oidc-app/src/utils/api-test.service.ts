import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiTestService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    return this.http.get('http://localhost:3000/posts')
  }
}
