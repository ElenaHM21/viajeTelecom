import { Component, OnInit } from '@angular/core';
import { RegistroService } from 'src/app/registro.service';
import{Router} from'@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  articulos:any;

  art={
    codigo:0,
    name:"",
    mail:"",
    password:""

  }
  constructor(private registroServicio : RegistroService,private router:Router) { }

  ngOnInit() {
   
  }

  

  alta() {
    this.registroServicio.alta(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
      
        this.router.navigate(['/login']);
      }
    });
  }

  volver(){
    this.router.navigate(['/login']);
  }
}
