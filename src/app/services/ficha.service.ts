import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ficha } from '../models/fichas';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FichaService {
  API_URI:string = 'http://localhost:3000/api';
  headers = {
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + localStorage.getItem('token')
    }
  }

  constructor(private http:HttpClient) {  }
  getFichas(){
    return this.http.get(`${this.API_URI}/ficha`);
  }
  getFichaById(id:string){
    return this.http.get(`${this.API_URI}/ficha/${id}`);
  }
  deleteFicha(id:string){
    return this.http.delete(`${this.API_URI}/ficha/${id}`,this.headers);
  }
  updateFicha(id:string|number, updatedFicha:any){
    return this.http.put(`${this.API_URI}/ficha/${id}`,this.headers,updatedFicha);
  }
  saveFicha(ficha:any){
    return this.http.post(`${this.API_URI}/ficha`,this.headers,ficha);
  }
  
}
