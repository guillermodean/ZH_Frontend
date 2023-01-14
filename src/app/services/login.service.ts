import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URI:string='http://localhost:3000/api/login';

  constructor( private http:HttpClient) { }

    //get token from local storage
    // Post user to API_URI
    // if success, save token to local storage
    // if fail, show error message
    postuser(User:any){
      return this.http.post(`${this.API_URI}`,User)
    }

  }

