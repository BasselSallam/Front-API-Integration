import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}

  getTestApiDate() {
    return this.http.get(this.url + 'cats');
  }
}
