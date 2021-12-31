import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatalunaService } from 'src/app/cataluna.service';

@Component({
  selector: 'app-cataluna',
  templateUrl: './cataluna.component.html',
  styleUrls: ['./cataluna.component.css']
})
export class CatalunaComponent implements OnInit {
  articulos:any;
  art={
    codigo:0,
    name:"",
    city:"",
    taxes:"",
    direction:""
  }
  constructor(private catalunaServicio:CatalunaService,private router:Router) { }

  ngOnInit(): void {
    this.recuperarTodos();
 }
 changesVolver(){
   this.router.navigate(['/mapa']);
 }
 recuperarTodos() {
   this.catalunaServicio.recuperarTodos().subscribe((result:any) => this.articulos = result);
 }
 alta() {
   this.catalunaServicio.alta(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       //alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }
 baja(codigo:number) {
   this.catalunaServicio.baja(codigo).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }

 modificacion() {
   this.catalunaServicio.modificacion(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });    
 }
 
 seleccionar(codigo:number) {
   this.catalunaServicio.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
 }

 hayRegistros() {
   return true;
 } 
}

