import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get('/stories');
  }

  get(id: number) {
    return this.http.get(`/stories/${id}`);
  }
}
