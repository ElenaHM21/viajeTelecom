import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MadridService } from 'src/app/madrid.service';

@Component({
  selector: 'app-madrid',
  templateUrl: './madrid.component.html',
  styleUrls: ['./madrid.component.css']
})
export class MadridComponent implements OnInit {

  articulos:any;
  art={
    codigo:0,
    name:"",
    city:"",
    taxes:"",
    direction:""
  }
  constructor(private madridServicio:MadridService,private router:Router) { }

  ngOnInit(): void {
    this.recuperarTodos();
 }
 changesVolver(){
   this.router.navigate(['/mapa']);
 }
 recuperarTodos() {
   this.madridServicio.recuperarTodos().subscribe((result:any) => this.articulos = result);
 }
 alta() {
   this.madridServicio.alta(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       //alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }
 baja(codigo:number) {
   this.madridServicio.baja(codigo).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }

 modificacion() {
   this.madridServicio.modificacion(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });    
 }
 
 seleccionar(codigo:number) {
   this.madridServicio.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
 }

 hayRegistros() {
   return true;
 } 
}