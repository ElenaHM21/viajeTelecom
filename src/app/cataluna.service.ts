import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalunaService {

  url='https://viajedaw.herokuapp.com/';
  constructor(private http:HttpClient) { }
  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodosCataluna.php`);
  }
  alta(articulo:any) {
    return this.http.post(`${this.url}altaCataluna.php`, JSON.stringify(articulo));    
  }
  baja(codigo:number) {
    return this.http.get(`${this.url}bajaCataluna.php?codigo=${codigo}`);
  }
  
  seleccionar(codigo:number) {
    return this.http.get(`${this.url}seleccionarCataluna.php?codigo=${codigo}`);
  }

  modificacion(articulo:any) {
    return this.http.post(`${this.url}modificacionCataluna.php`, JSON.stringify(articulo));    
  } 
}

