import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { MapaComponent } from './mapa/mapa.component';
import { GaliciaComponent } from './lugares/galicia/galicia.component';
import { AsturiasComponent } from './lugares/asturias/asturias.component';
import { CantabriaComponent } from './lugares/cantabria/cantabria.component';
import { PaisVascoComponent } from './lugares/pais-vasco/pais-vasco.component';
import { AragonComponent } from './lugares/aragon/aragon.component';
import { CatalunaComponent } from './lugares/cataluna/cataluna.component';
import { ValenciaComponent } from './lugares/valencia/valencia.component';
import { BalearesComponent } from './lugares/baleares/baleares.component';
import { NavarraComponent } from './lugares/navarra/navarra.component';
import { MurciaComponent } from './lugares/murcia/murcia.component';
import { RiojaComponent } from './lugares/rioja/rioja.component';
import { ExtremaduraComponent } from './lugares/extremadura/extremadura.component';
import { MadridComponent } from './lugares/madrid/madrid.component';
import { ManchaComponent } from './lugares/mancha/mancha.component';
import { CanariasComponent } from './lugares/canarias/canarias.component';
import { AndaluciaComponent } from './lugares/andalucia/andalucia.component';
import { CastillaLeonComponent } from './lugares/castilla-leon/castilla-leon.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ViajeComponent } from './viaje/viaje.component';
import { GaleriaComponent } from './galeria/galeria.component';
const routes: Routes = [
 /* {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",loadChildren:()=>import('./component/home/home.component').then(m=>m.HomeComponent)
},
{path:"intro",loadChildren:()=>import('./component/intro/intro.component').then(m=>m.IntroComponent)
},
{path:"login",loadChildren:()=>import('./component/login/login.component').then(m=>m.LoginComponent)
},
{path:"register",loadChildren:()=>import('./component/register/register.component').then(m=>m.RegisterComponent)
},
{path:"crud",loadChildren:()=>import('./component/crud/crud.component').then(m=>m.CrudComponent)
}*/
//{ path: 'first-component', component: FirstComponent },
{path:"home",component:HomeComponent},
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"mapa",component:MapaComponent},
{path:"galicia",component:GaliciaComponent},
{path:"asturias",component:AsturiasComponent},
{path:"cantabria",component:CantabriaComponent},
{path:"paisVasco",component:PaisVascoComponent},
{path:"aragon",component:AragonComponent},
{path:"cataluna",component:CatalunaComponent},
{path:"valencia",component:ValenciaComponent},
{path:"baleares",component:BalearesComponent},
{path:"navarra",component:NavarraComponent},
{path:"murcia",component:MurciaComponent},
{path:"rioja",component:RiojaComponent},
{path:"extremadura", component:ExtremaduraComponent},
{path:"madrid",component:MadridComponent},
{path:"mancha",component:ManchaComponent},
{path:"canarias",component:CanariasComponent},
{path:"andalucia",component:AndaluciaComponent},
{path:"castillaLeon",component:CastillaLeonComponent},
{path:"comentarios",component:ComentariosComponent},
{path:"viaje",component:ViajeComponent},
{path:"galeria",component:GaleriaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
