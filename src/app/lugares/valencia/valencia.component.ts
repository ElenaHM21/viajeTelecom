import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValenciaService } from 'src/app/valencia.service';

@Component({
  selector: 'app-valencia',
  templateUrl: './valencia.component.html',
  styleUrls: ['./valencia.component.css']
})
export class ValenciaComponent implements OnInit {
  articulos:any;
  art={
    codigo:0,
    name:"",
    city:"",
    taxes:"",
    direction:""
  }
  constructor(private valenciaServicio:ValenciaService,private router:Router) { }

  ngOnInit(): void {
    this.recuperarTodos();
 }
 changesVolver(){
   this.router.navigate(['/mapa']);
 }
 recuperarTodos() {
   this.valenciaServicio.recuperarTodos().subscribe((result:any) => this.articulos = result);
 }
 alta() {
   this.valenciaServicio.alta(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       //alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }
 baja(codigo:number) {
   this.valenciaServicio.baja(codigo).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }

 modificacion() {
   this.valenciaServicio.modificacion(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });    
 }
 
 seleccionar(codigo:number) {
   this.valenciaServicio.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
 }

 hayRegistros() {
   return true;
 } 
}

