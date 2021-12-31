import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsturiasService } from 'src/app/asturias.service';
@Component({
  selector: 'app-asturias',
  templateUrl: './asturias.component.html',
  styleUrls: ['./asturias.component.css']
})
export class AsturiasComponent implements OnInit {
  articulos:any;
  art={
    codigo:0,
    name:"",
    city:"",
    taxes:"",
    direction:""
  }
  constructor(private AsturiasServicio:AsturiasService,private router:Router) { }

  ngOnInit(): void {
    this.recuperarTodos();
 }
 changesVolver(){
   this.router.navigate(['/mapa']);
 }
 recuperarTodos() {
   this.AsturiasServicio.recuperarTodos().subscribe((result:any) => this.articulos = result);
 }
 alta() {
   this.AsturiasServicio.alta(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       //alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }
 baja(codigo:number) {
   this.AsturiasServicio.baja(codigo).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }

 modificacion() {
   this.AsturiasServicio.modificacion(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });    
 }
 
 seleccionar(codigo:number) {
   this.AsturiasServicio.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
 }

 hayRegistros() {
   return true;
 } 
}
