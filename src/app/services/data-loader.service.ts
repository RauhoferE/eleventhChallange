import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  constructor(private http: HttpClient) { 
    
  }
  load(){
    return this.http.get("Hier url");// Service hier macht man ein get request auf url
  }
}
