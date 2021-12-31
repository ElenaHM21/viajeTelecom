import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManchaService } from 'src/app/mancha.service';

@Component({
  selector: 'app-mancha',
  templateUrl: './mancha.component.html',
  styleUrls: ['./mancha.component.css']
})
export class ManchaComponent implements OnInit {

  articulos:any;
  art={
    codigo:0,
    name:"",
    city:"",
    taxes:"",
    direction:""
  }
  constructor(private manchaServicio:ManchaService,private router:Router) { }

  ngOnInit(): void {
    this.recuperarTodos();
 }
 changesVolver(){
   this.router.navigate(['/mapa']);
 }
 recuperarTodos() {
   this.manchaServicio.recuperarTodos().subscribe((result:any) => this.articulos = result);
 }
 alta() {
   this.manchaServicio.alta(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       //alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }
 baja(codigo:number) {
   this.manchaServicio.baja(codigo).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }

 modificacion() {
   this.manchaServicio.modificacion(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });    
 }
 
 seleccionar(codigo:number) {
   this.manchaServicio.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
 }

 hayRegistros() {
   return true;
 } 
}