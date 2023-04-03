import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URI:string = environment.apiUrl;

  constructor( private http:HttpClient) { }

    //get token from local storage
    // Post user to API_URI
    // if success, save token to local storage
    // if fail, show error message
    postuser(User:any){
      return this.http.post(`${this.API_URI}/login`,User)
    }

  }

