import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URI:string='http://localhost:3000/api';
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(`${this.API_URI}/users`)
  }

  getUserById(id:string){
    return this.http.get(`${this.API_URI}/users/${id}`)
  }

  deleteUser(id:string){
    return this.http.delete(`${this.API_URI}/users/${id}`)
  }

  updateUser(id:string, updatedUser:any){
    return this.http.put(`${this.API_URI}/users/${id}`,updatedUser)
  }

  saveUser(user:any){
    return this.http.post(`${this.API_URI}/users`,user)
  }

  getcount(){
    return this.http.get(`${this.API_URI}/users/count`)
  }


}
