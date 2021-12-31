import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViajeService } from '../viaje.service';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css']
})
export class ViajeComponent implements OnInit {

  articulos:any;
  art={
    codigo:0,
    viaje:""
  }
  constructor(private viajeServicio:ViajeService, private router:Router) { }

  ngOnInit(): void {
    this.recuperarTodos();
 }
 volver(){
   this.router.navigate(['/mapa']);
 }
 recuperarTodos() {
   this.viajeServicio.recuperarTodos().subscribe((result:any) => this.articulos = result);
 }
 alta() {
   this.viajeServicio.alta(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       //alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }
 baja(codigo:number) {
   this.viajeServicio.baja(codigo).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }

 modificacion() {
   this.viajeServicio.modificacion(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });    
 }
 
 seleccionar(codigo:number) {
   this.viajeServicio.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
 }

 hayRegistros() {
   return true;
 } 
}
