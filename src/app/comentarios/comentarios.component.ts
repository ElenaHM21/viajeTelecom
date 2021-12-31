import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComentarioService } from '../comentario.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  articulos:any;
  art={
    codigo:0,
    asunto:"",
    mensaje:""
  }
  constructor(private comentarioServicio:ComentarioService, private router:Router) { }

  ngOnInit(): void {
    this.recuperarTodos();
 }
 volver(){
   this.router.navigate(['/mapa']);
 }
 recuperarTodos() {
   this.comentarioServicio.recuperarTodos().subscribe((result:any) => this.articulos = result);
 }
 alta() {
   this.comentarioServicio.alta(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       //alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }
 baja(codigo:number) {
   this.comentarioServicio.baja(codigo).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });
 }

 modificacion() {
   this.comentarioServicio.modificacion(this.art).subscribe((datos:any) => {
     if (datos['resultado']=='OK') {
       alert(datos['mensaje']);
       this.recuperarTodos();
     }
   });    
 }
 
 seleccionar(codigo:number) {
   this.comentarioServicio.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
 }

 hayRegistros() {
   return true;
 } 
}
