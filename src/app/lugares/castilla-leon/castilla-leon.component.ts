import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CastillaLeonService } from 'src/app/castilla-leon.service';

@Component({
  selector: 'app-castilla-leon',
  templateUrl: './castilla-leon.component.html',
  styleUrls: ['./castilla-leon.component.css']
})
export class CastillaLeonComponent implements OnInit {

  articulos:any;
  art={
    codigo:0,
    name:"",
    city:"",
    taxes:"",
    direction:""
  }
  constructor(private castillaServicio:CastillaLeonService,private router:Router) { }

  ngOnInit(): void {
    this.recuperarTodos();
 }
 changesVolver(){
   this.router.navigate(['/mapa']);
 }
 recuperarTodos() {
   this.castillaServicio.recuperarTodos().subscribe((result:any) => this.articulos = result);
 }
 alta() {
   this.castillaServicio.alta(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       //alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }
 baja(codigo:number) {
   this.castillaServicio.baja(codigo).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }

 modificacion() {
   this.castillaServicio.modificacion(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });    
 }
 
 seleccionar(codigo:number) {
   this.castillaServicio.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
 }

 hayRegistros() {
   return true;
 } 
}
