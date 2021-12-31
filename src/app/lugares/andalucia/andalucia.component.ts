import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AndaluciaService } from 'src/app/andalucia.service';

@Component({
  selector: 'app-andalucia',
  templateUrl: './andalucia.component.html',
  styleUrls: ['./andalucia.component.css']
})
export class AndaluciaComponent implements OnInit {

  articulos:any;
  art={
    codigo:0,
    name:"",
    city:"",
    taxes:"",
    direction:""
  }
  constructor(private andaluciaServicio:AndaluciaService,private router:Router) { }

  ngOnInit(): void {
    this.recuperarTodos();
 }
 changesVolver(){
   this.router.navigate(['/mapa']);
 }
 recuperarTodos() {
   this.andaluciaServicio.recuperarTodos().subscribe((result:any) => this.articulos = result);
 }
 alta() {
   this.andaluciaServicio.alta(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       //alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }
 baja(codigo:number) {
   this.andaluciaServicio.baja(codigo).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }

 modificacion() {
   this.andaluciaServicio.modificacion(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });    
 }
 
 seleccionar(codigo:number) {
   this.andaluciaServicio.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
 }

 hayRegistros() {
   return true;
 } 
}