import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GaliciaService } from 'src/app/galicia.service';
@Component({
  selector: 'app-galicia',
  templateUrl: './galicia.component.html',
  styleUrls: ['./galicia.component.css']
})
export class GaliciaComponent implements OnInit {
  articulos:any;
  art={
    codigo:0,
    name:"",
    city:"",
    taxes:"",
    direction:""
  }
  constructor(private router:Router,private galiciaServicio:GaliciaService) { }

  ngOnInit(): void {
     this.recuperarTodos();
  }
  changesVolver(){
    this.router.navigate(['/mapa']);
  }
  recuperarTodos() {
    this.galiciaServicio.recuperarTodos().subscribe((result:any) => this.articulos = result);
  }
  alta() {
    this.galiciaServicio.alta(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        //alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }
  baja(codigo:number) {
    this.galiciaServicio.baja(codigo).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this.galiciaServicio.modificacion(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(codigo:number) {
    this.galiciaServicio.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
  }

  hayRegistros() {
    return true;
  } 
}
