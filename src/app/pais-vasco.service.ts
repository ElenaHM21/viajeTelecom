import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisVascoService {
  url='https://viajedaw.herokuapp.com/';
  constructor(private http:HttpClient) { }
  recuperarTodos() {
    return this.http.get(`${this.url}recuperartodosPaisVasco.php`);
  }
  alta(articulo:any) {
    return this.http.post(`${this.url}altaPaisVasco.php`, JSON.stringify(articulo));    
  }
  baja(codigo:number) {
    return this.http.get(`${this.url}bajaPaisVasco.php?codigo=${codigo}`);
  }
  
  seleccionar(codigo:number) {
    return this.http.get(`${this.url}seleccionarPaisVasco.php?codigo=${codigo}`);
  }

  modificacion(articulo:any) {
    return this.http.post(`${this.url}modificacionPaisVasco.php`, JSON.stringify(articulo));    
  } 
}
