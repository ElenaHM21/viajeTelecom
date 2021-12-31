import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CantabriaService } from 'src/app/cantabria.service';
@Component({
  selector: 'app-cantabria',
  templateUrl: './cantabria.component.html',
  styleUrls: ['./cantabria.component.css']
})
export class CantabriaComponent implements OnInit {
  articulos:any;
  art={
    codigo:0,
    name:"",
    city:"",
    taxes:"",
    direction:""
  }
  constructor(private CantabriaServicio:CantabriaService,private router:Router) { }

  ngOnInit(): void {
    this.recuperarTodos();
 }
 changesVolver(){
   this.router.navigate(['/mapa']);
 }
 recuperarTodos() {
   this.CantabriaServicio.recuperarTodos().subscribe((result:any) => this.articulos = result);
 }
 alta() {
   this.CantabriaServicio.alta(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       //alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }
 baja(codigo:number) {
   this.CantabriaServicio.baja(codigo).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }

 modificacion() {
   this.CantabriaServicio.modificacion(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });    
 }
 
 seleccionar(codigo:number) {
   this.CantabriaServicio.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
 }

 hayRegistros() {
   return true;
 } 
}
