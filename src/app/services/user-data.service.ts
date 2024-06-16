import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  URL = "http://universities.hipolabs.com/search?country=India"

  constructor(private http:HttpClient) {

  }

  users()
  {
    return this.http.get(this.URL);
  }
}
