import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { IntroComponent } from './component/intro/intro.component';
import { LoginComponent } from './component/login/login.component';
import{ RegisterComponent}from './component/register/register.component';
import { CrudComponent } from './component/crud/crud.component';
import { MapaComponent } from './mapa/mapa.component';
import { SidebarModule } from 'ng-sidebar';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    LoginComponent,
    RegisterComponent,
    CrudComponent,
    MapaComponent,
    GaliciaComponent,
    AsturiasComponent,
    CantabriaComponent,
    PaisVascoComponent,
    AragonComponent,
    CatalunaComponent,
    ValenciaComponent,
    BalearesComponent,
    NavarraComponent,
    MurciaComponent,
    RiojaComponent,
    ExtremaduraComponent,
    MadridComponent,
    ManchaComponent,
    CanariasComponent,
    AndaluciaComponent,
    CastillaLeonComponent,
    ComentariosComponent,
    ViajeComponent,
    GaleriaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC2lgx_6bX6waXg-_1Uu0exHdUZArrXE3U'
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
