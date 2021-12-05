import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';
import { RegistroMascotaComponent } from './componentes/registro-mascota/registro-mascota.component';
import { UsuarioCRUDMascotasComponent } from './componentes/usuario-crud-mascotas/usuario-crud-mascotas.component';
import { VeterinarioCRUDMascotasComponent } from './componentes/veterinario-crud-mascotas/veterinario-crud-mascotas.component';
import { BarraNavegacionComponent } from './plantilla/barra-navegacion/barra-navegacion.component';
import { PieDePaginaComponent } from './plantilla/pie-de-pagina/pie-de-pagina.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { CRUDVeterinarioComponent } from './componentes/administrador/crud-veterinario/crud-veterinario.component';
import { CRUDUsuarioComponent } from './componentes/administrador/crud-usuario/crud-usuario.component';
import { RegistroVeterinarioComponent } from './componentes/administrador/registro-veterinario/registro-veterinario.component';
import { FormularioComponent } from './componentes/usuario-crud-mascotas/formulario/formulario.component';
import { FormularioHistorialComponent } from './componentes/usuario-crud-mascotas/formulario-historial/formulario-historial.component';
import { SolicitudComponent } from './componentes/usuario-crud-mascotas/solicitud/solicitud.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdministradorComponent } from './componentes/administrador/administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    RegistroMascotaComponent,
    UsuarioCRUDMascotasComponent,
    VeterinarioCRUDMascotasComponent,
    BarraNavegacionComponent,
    PieDePaginaComponent,
    InicioComponent,
    ErrorComponent,
    CRUDVeterinarioComponent,
    CRUDUsuarioComponent,
    RegistroVeterinarioComponent,
    FormularioComponent,
    FormularioHistorialComponent,
    SolicitudComponent,
    AdministradorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[FormularioComponent]
})
export class AppModule { }
