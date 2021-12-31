import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AndaluciaService {
  url='https://viajedaw.herokuapp.com/';
  constructor(private http:HttpClient) { }
  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodosAndalucia.php`);
  }
  alta(articulo:any) {
    return this.http.post(`${this.url}altaAndalucia.php`, JSON.stringify(articulo));    
  }
  baja(codigo:number) {
    return this.http.get(`${this.url}bajaAndalucia.php?codigo=${codigo}`);
  }
  
  seleccionar(codigo:number) {
    return this.http.get(`${this.url}seleccionarAndalucia.php?codigo=${codigo}`);
  }

  modificacion(articulo:any) {
    return this.http.post(`${this.url}modificacionAndalucia.php`, JSON.stringify(articulo));    
  } 
}