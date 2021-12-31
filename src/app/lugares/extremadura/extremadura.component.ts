import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExtremaduraService } from 'src/app/extremadura.service';

@Component({
  selector: 'app-extremadura',
  templateUrl: './extremadura.component.html',
  styleUrls: ['./extremadura.component.css']
})
export class ExtremaduraComponent implements OnInit {

  articulos:any;
  art={
    codigo:0,
    name:"",
    city:"",
    taxes:"",
    direction:""
  }
  constructor(private extremaduraServicio:ExtremaduraService,private router:Router) { }

  ngOnInit(): void {
    this.recuperarTodos();
 }
 changesVolver(){
   this.router.navigate(['/mapa']);
 }
 recuperarTodos() {
   this.extremaduraServicio.recuperarTodos().subscribe((result:any) => this.articulos = result);
 }
 alta() {
   this.extremaduraServicio.alta(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       //alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }
 baja(codigo:number) {
   this.extremaduraServicio.baja(codigo).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }

 modificacion() {
   this.extremaduraServicio.modificacion(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });    
 }
 
 seleccionar(codigo:number) {
   this.extremaduraServicio.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
 }

 hayRegistros() {
   return true;
 } 
}

