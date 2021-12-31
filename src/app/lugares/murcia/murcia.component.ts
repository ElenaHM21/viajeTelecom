import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MurciaService } from 'src/app/murcia.service';

@Component({
  selector: 'app-murcia',
  templateUrl: './murcia.component.html',
  styleUrls: ['./murcia.component.css']
})
export class MurciaComponent implements OnInit {
  articulos:any;
  art={
    codigo:0,
    name:"",
    city:"",
    taxes:"",
    direction:""
  }
  constructor(private murciaServicio:MurciaService,private router:Router) { }

  ngOnInit(): void {
    this.recuperarTodos();
 }
 changesVolver(){
   this.router.navigate(['/mapa']);
 }
 recuperarTodos() {
   this.murciaServicio.recuperarTodos().subscribe((result:any) => this.articulos = result);
 }
 alta() {
   this.murciaServicio.alta(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       //alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }
 baja(codigo:number) {
   this.murciaServicio.baja(codigo).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }

 modificacion() {
   this.murciaServicio.modificacion(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });    
 }
 
 seleccionar(codigo:number) {
   this.murciaServicio.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
 }

 hayRegistros() {
   return true;
 } 
}

