import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavarraService {
  url='https://viajedaw.herokuapp.com/';
  constructor(private http:HttpClient) { }
  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodosNavarra.php`);
  }
  alta(articulo:any) {
    return this.http.post(`${this.url}altaNavarra.php`, JSON.stringify(articulo));    
  }
  baja(codigo:number) {
    return this.http.get(`${this.url}bajaNavarra.php?codigo=${codigo}`);
  }
  
  seleccionar(codigo:number) {
    return this.http.get(`${this.url}seleccionarNavarra.php?codigo=${codigo}`);
  }

  modificacion(articulo:any) {
    return this.http.post(`${this.url}modificacionNavarra.php`, JSON.stringify(articulo));    
  } 
}