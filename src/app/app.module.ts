import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { RegistroMascotaComponent } from './componentes/registro-mascota/registro-mascota.component';
import { UsuarioCRUDComponent } from './componentes/usuario-crud/usuario-crud.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { VeterinarioCRUDComponent } from './componentes/veterinario-crud/veterinario-crud.component';
import { BarraNavegacionComponent } from './plantilla/barra-navegacion/barra-navegacion.component';
import { PieDePaginaComponent } from './plantilla/pie-de-pagina/pie-de-pagina.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    RegistroMascotaComponent,
    UsuarioCRUDComponent,
    InicioSesionComponent,
    VeterinarioCRUDComponent,
    BarraNavegacionComponent,
    PieDePaginaComponent,
    InicioComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
