import { ThrowStmt } from '@angular/compiler';
import { Component} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent  {
 opened=false;
 lat = 40.463667;
  lng = -3.74922;

  constructor(private router:Router) { }
  public changeColor(){
    this.opened=!this.opened;
  }
  public changesGalicia(){
    this.router.navigate(['/galicia']);
  }
  changesAsturias(){
    this.router.navigate(['/asturias']);
  }
  changesCantabria(){
    this.router.navigate(['/cantabria']);
  }
  changesPaisVasco(){
    this.router.navigate(['/paisVasco']);
  }
  changesAragon(){
    this.router.navigate(['/aragon']);
  }
  changesCataluna(){
    this.router.navigate(['/cataluna']);
  }
  changesValencia(){
    this.router.navigate(['valencia']);
  }
  changesBaleares(){
    this.router.navigate(['/baleares']);
  }
  changesNavarra(){
    this.router.navigate(['/navarra']);
  }
  changesMurcia(){
    this.router.navigate(['/murcia']);
  }
  changesRioja(){
    this.router.navigate(['/rioja']);
  }
  changesExtremadura(){
    this.router.navigate(['/extremadura']);
  }
  changesMadrid(){
    this.router.navigate(['/madrid']);
  }
  changesMancha(){
    this.router.navigate(['/mancha']);
  }
  changesCanarias(){
    this.router.navigate(['/canarias']);
  }
  changesAndalucia(){
    this.router.navigate(['/andalucia']);
  }
  changescastillaLeon(){
    this.router.navigate(['/castillaLeon']);
  }
  changesComentarios(){
    this.router.navigate(['/comentarios']);
  }
  changesViajes(){
    this.router.navigate(['/viaje']);
  }
  changesGaleria(){
    this.router.navigate(['/galeria']);
  }
  changesCerrar(){
    this.router.navigate(['/login']);
  }
}
