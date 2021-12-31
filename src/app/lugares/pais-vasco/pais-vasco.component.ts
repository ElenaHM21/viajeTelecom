import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaisVascoService } from 'src/app/pais-vasco.service';

@Component({
  selector: 'app-pais-vasco',
  templateUrl: './pais-vasco.component.html',
  styleUrls: ['./pais-vasco.component.css']
})
export class PaisVascoComponent implements OnInit {
  articulos:any;
  art={
    codigo:0,
    name:"",
    city:"",
    taxes:"",
    direction:""
  }
  constructor(private paisVascoServicio:PaisVascoService,private router:Router) { }

  ngOnInit(): void {
    this.recuperarTodos();
 }
 changesVolver(){
   this.router.navigate(['/mapa']);
 }
 recuperarTodos() {
   this.paisVascoServicio.recuperarTodos().subscribe((result:any) => this.articulos = result);
 }
 alta() {
   this.paisVascoServicio.alta(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       //alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }
 baja(codigo:number) {
   this.paisVascoServicio.baja(codigo).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }

 modificacion() {
   this.paisVascoServicio.modificacion(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });    
 }
 
 seleccionar(codigo:number) {
   this.paisVascoServicio.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
 }

 hayRegistros() {
   return true;
 } 
}

