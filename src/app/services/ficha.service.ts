import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Ficha } from '../models/fichas';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FichaService {
  API_URI:string = 'http://localhost:3000/api';

  constructor(private http:HttpClient) {  }
  getFichas(){
    return this.http.get(`${this.API_URI}/ficha`);
  }
  getFichaById(id:string){
    return this.http.get(`${this.API_URI}/ficha/${id}`);
  }
  deleteFicha(id:string){
    const headers = new HttpHeaders({

      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')

  });
    return this.http.delete(`${this.API_URI}/ficha/${id}`,{headers});
  }
  updateFicha(id:string|number, updatedFicha:any){
    const headers = new HttpHeaders({

        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')

    });
    return this.http.put(`${this.API_URI}/ficha/${id}`,updatedFicha,{headers});
    
  }
  saveFicha(ficha:any){
    const headers = new HttpHeaders({

      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')

  });
    return this.http.post(`${this.API_URI}/ficha`,{headers},ficha);
  }
  
}
