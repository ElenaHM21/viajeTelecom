import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {
  url='https://viajedaw.herokuapp.com/';
  constructor(private http:HttpClient) { }
  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodosViaje.php`);
  }
  alta(articulo:any) {
    return this.http.post(`${this.url}altaViaje.php`, JSON.stringify(articulo));    
  }
  baja(codigo:number) {
    return this.http.get(`${this.url}bajaViaje.php?codigo=${codigo}`);
  }
  
  seleccionar(codigo:number) {
    return this.http.get(`${this.url}seleccionarViaje.php?codigo=${codigo}`);
  }

  modificacion(articulo:any) {
    return this.http.post(`${this.url}modificacionViaje.php`, JSON.stringify(articulo));    
  } 
}
